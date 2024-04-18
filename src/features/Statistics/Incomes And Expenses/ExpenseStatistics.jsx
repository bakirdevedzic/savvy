import { useState } from "react";
import IAEPieChart from "./IAEPieChart";
import PeriodPicker from "../PeriodPicker";
import { calculateExpenseStats } from "../../../utils/statisticsHelpers";
import { useSelector } from "react-redux";
import { getTransactions } from "../../Transactions/transactionsSlice";
import { getExpenseCategories } from "../../Categories/categoriesSlice";

function ExpenseStatistics() {
  const [period, setPeriod] = useState(30);
  const transactions = useSelector(getTransactions);
  const expenseCategories = useSelector(getExpenseCategories);

  const expenseData = calculateExpenseStats(
    transactions,
    expenseCategories,
    period
  );

  return (
    <div className="flex flex-col ">
      <div className="font-almarai font-bold text-gray-800">
        Expense category statistics provide insights into where and how much
        money is spent, helping track budget allocations and identify areas for
        potential savings or optimizations.
      </div>
      <div>
        <PeriodPicker setPeriod={setPeriod} />
      </div>
      <div>
        <IAEPieChart data={expenseData} />
      </div>
    </div>
  );
}

export default ExpenseStatistics;
