import { useSelector } from "react-redux";
import TypesStatistics from "../features/Statistics/Types/TypesStatistics";
import InfoCard1 from "../ui/InfoCard";
import { getTransactions } from "../features/Transactions/transactionsSlice";
import TransactionsCard from "../features/Dashboard/Transactions/TransactionsCard";
import { generateChartData } from "../utils/statisticsHelpers";
import Chart from "react-google-charts";
import { calculateMonthSpendings } from "../utils/budgetHelpers";

function Dashboard() {
  const options = {
    pieHole: 0.4,
    is3D: false,
    colors: ["#2ecc71", "#ff7675"],

    legend: { position: "top", alignment: "start" },
  };
  const currentMonth = new Date();
  const currentBudget2 = useSelector((state) => state.budgets.currentBudget);
  const transactions = useSelector(getTransactions);
  let firstMonth, lastMonth, data;
  if (transactions.length !== 0) {
    firstMonth = new Date(transactions[transactions.length - 1].date);
    lastMonth = new Date(transactions[0].date);
    data = generateChartData(transactions, firstMonth, lastMonth);
  }

  const thisMonthSpending = calculateMonthSpendings(transactions, currentMonth);

  return (
    <div className="max-w-[1700px] w-[100%]">
      <div className="text-2xl mb-4 mt-2 font-bold text-slate-800">
        Welcome back, Alexandar!
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-between gap-3 flex-wrap">
          <div className="grow">
            <InfoCard1 label="Balance" amount={45685} />
          </div>
          <div className="grow">
            <InfoCard1
              label="Budget for this month"
              amount={
                currentBudget2?.planned_amount
                  ? currentBudget2?.planned_amount
                  : 0
              }
            />
          </div>
          <div className="grow">
            <InfoCard1
              label="Spent this month"
              amount={thisMonthSpending}
              color="red"
            />
          </div>
          <div className="grow">
            <InfoCard1
              label="Remaining for this month"
              amount={
                currentBudget2?.planned_amount - thisMonthSpending
                  ? currentBudget2?.planned_amount - thisMonthSpending
                  : 0
              }
              color={`${currentBudget2?.planned_amount - thisMonthSpending > 0 ? "green" : "red"}`}
            />
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 overflow-auto">
          <TransactionsCard />
          <div className="bg-white p-4 rounded-lg shadow-xl">
            <TypesStatistics
              text="Income and expense in the last 30 days!"
              editing={false}
            />
          </div>
        </div>

        <div className="bg-white pt-4 p-3 rounded-lg shadow-lg w-[100%] flex flex-col">
          <p className="text-lg font-bold">
            Spending and income/expense ratio over time
          </p>
          {transactions.length !== 0 ? (
            <Chart
              chartType="AreaChart"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          ) : (
            <div className="flex justify-center items-center h-[350px] font-bold text-gray-500 text-xl">
              Not enough data!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
