import { useState } from "react";
import PeriodPicker from "../PeriodPicker";
import { useSelector } from "react-redux";
import { getTransactions } from "../../Transactions/transactionsSlice";
import {
  getExpenseCategories,
  getIncomeCategories,
} from "../../Categories/categoriesSlice";
import {
  calculateExpenseStats,
  calculateIncomeStats,
  calculateTotalAmount,
} from "../../../utils/statisticsHelpers";
import TypePieChart from "./TypePieChart";

function TypesStatistics() {
  const [period, setPeriod] = useState(30);
  const transactions = useSelector(getTransactions);
  const expenseCategories = useSelector(getExpenseCategories);
  const incomeCategories = useSelector(getIncomeCategories);
  const data = [["Type", "Amount"]];

  const expenseData = calculateTotalAmount(
    calculateExpenseStats(transactions, expenseCategories, period)
  );

  const incomeData = calculateTotalAmount(
    calculateIncomeStats(transactions, incomeCategories, period)
  );

  data.push(["Expenses", expenseData], ["Incomes", incomeData]);
  console.log(data);

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
        <TypePieChart data={data} />
      </div>
    </div>
  );
}

export default TypesStatistics;
