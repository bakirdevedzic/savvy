import { useSelector } from "react-redux";
import { getTransactions } from "../../Transactions/transactionsSlice";

import { generateChartData } from "../../../utils/statisticsHelpers";
import SpendingBar from "./SpendingBar";

function SpendingStats() {
  const transactions = useSelector(getTransactions);
  const firstMonth = new Date(transactions[transactions.length - 1].date);
  const lastMonth = new Date(transactions[0].date);

  const data = generateChartData(transactions, firstMonth, lastMonth);
  console.log(data);

  return (
    <div className="flex flex-col ">
      <div className="font-almarai font-bold text-gray-800 mb-5">
        The Bar chart displays the monthly comparison of incomes and expenses
        over a period, showcasing the financial trends and fluctuations over
        time. It provides a visual overview of income generation and expenditure
        patterns, aiding in budgeting and financial analysis.
      </div>

      <div>
        <SpendingBar data={data} />
      </div>
    </div>
  );
}

export default SpendingStats;
