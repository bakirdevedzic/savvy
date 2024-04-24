import { useSelector } from "react-redux";
import SpendingStats from "../features/Statistics/Spending/SpendingStats";
import TypesStatistics from "../features/Statistics/Types/TypesStatistics";
import TransactionsTable from "../features/Transactions/TransactionsTable";
import InfoCard1 from "../ui/InfoCard";
import { getTransactions } from "../features/Transactions/transactionsSlice";
import TransactionsCard from "../features/Dashboard/Transactions/TransactionsCard";

function Dashboard() {
  const transactions = useSelector(getTransactions).slice(0, 5);
  return (
    <div className="max-w-[1700px] w-[100%]">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-between gap-3 flex-wrap">
          <div className="grow">
            <InfoCard1 label="Just a tets" amount={475425} color="green" />
          </div>
          <div className="grow">
            <InfoCard1 label="Just a tets" amount={475425} color="green" />
          </div>
          <div className="grow">
            <InfoCard1 label="Just a tets" amount={475425} color="green" />
          </div>
          <div className="grow">
            <InfoCard1 label="Just a tets" amount={475425} color="green" />
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3  overflow-auto">
          <TransactionsCard />
          <div className="bg-white p-4 rounded-lg shadow-xl">
            <TypesStatistics
              text="Income and expense in the last 30 days!"
              editing={false}
            />
          </div>
        </div>
        <div className="bg-white pt-4 p-3 rounded-lg shadow-lg">
          <p className="text-xl font-bold font-almarai">Last 5 transactions</p>
          <TransactionsTable transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
