import { useSelector } from "react-redux";
import { getBudgets } from "../../Budget/budgetSlice";
import { formatMonth } from "../../../utils/helpers";
import BudgetsBar from "./BudgetsBar";

function BudgetsStats() {
  const budgets = useSelector(getBudgets);
  let data = [["Month", "Planned", "Saved", "Spent"]];

  data = data.concat(
    budgets
      .filter((budget) => new Date(budget.month) <= new Date())
      .map((budget) => [
        formatMonth(budget.month),
        budget.planned_amount <= 0 || budget.planned_amount === null
          ? 0
          : budget.planned_amount,
        budget.saved_amount <= 0 || budget.saved_amount === null
          ? 0
          : budget.saved_amount,
        budget.spent_amount === null || budget.spent_amount <= 0
          ? 0
          : budget.spent_amount,
      ])
  );

  return (
    <div className="flex flex-col">
      <div>
        <p className="font-almarai font-bold text-gray-800">
          This bar chart visualizes your budgeting progress across months. It
          compares your planned spending with the actual amounts saved and
          spent. This helps you identify if you&apos;re staying on track with
          your financial goals and where adjustments might be necessary in
          future months.
        </p>
      </div>
      <div>
        <BudgetsBar data={data} />
      </div>
    </div>
  );
}

export default BudgetsStats;
