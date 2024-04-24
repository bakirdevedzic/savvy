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

function TypesStatistics({ editing = true, text }) {
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

  return (
    <div className="flex flex-col ">
      <div className="font-almarai font-bold text-gray-800">
        {!editing
          ? text
          : "Expense category statistics provide insights into where and how much money is spent, helping track budget allocations and identify areas for potential savings or optimizations."}
      </div>
      {editing && (
        <div>
          <PeriodPicker setPeriod={setPeriod} />
        </div>
      )}
      <div>
        <TypePieChart data={data} />
      </div>
    </div>
  );
}

export default TypesStatistics;
