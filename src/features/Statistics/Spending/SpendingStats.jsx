import { useSelector } from "react-redux";
import { getTransactions } from "../../Transactions/transactionsSlice";

import { generateChartData } from "../../../utils/statisticsHelpers";
import SpendingBar from "./SpendingBar";

function SpendingStats({ text }) {
  const transactions = useSelector(getTransactions);
  let firstMonth, lastMonth, data;
  if (transactions.length !== 0) {
    firstMonth = new Date(transactions[transactions.length - 1].date);
    lastMonth = new Date(transactions[0].date);

    data = generateChartData(transactions, firstMonth, lastMonth);
  }

  return (
    <div className="flex flex-col ">
      <div className="font-almarai font-bold text-gray-800 mb-5">
        {text
          ? text
          : "The Bar chart displays the monthly comparison of incomes and expenses over a period, showcasing the financial trends and fluctuations over time. It provides a visual overview of income generation and expenditure patterns, aiding in budgeting and financial analysis."}
      </div>

      <div>
        {transactions.length !== 0 ? (
          <SpendingBar data={data} />
        ) : (
          <div className="flex justify-center items-center h-[350px] font-bold text-gray-500 text-xl">
            Plase add your first transaction!
          </div>
        )}
      </div>
    </div>
  );
}

export default SpendingStats;
