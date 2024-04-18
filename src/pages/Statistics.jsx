import { useState } from "react";
import Button from "../ui/Button";
import IncomesAndExpensesStatistics from "../features/Statistics/IncomesAndExpensesStatistics";

function Statistics() {
  const [stats, setStats] = useState("None");
  console.log(stats);
  return (
    <div className="max-w-[1700px] w-[100%] grid grid-rows-2">
      <div className="flex flex-wrap gap-2">
        <div className="grow basis-auto ">
          <Button type="base" onClick={() => setStats("Incomes")}>
            Incomes
          </Button>
        </div>
        <div className="grow basis-auto ">
          <Button type="base" onClick={() => setStats("Expenses")}>
            Expenses
          </Button>
        </div>
        <div className="grow basis-auto ">
          <Button type="base" onClick={() => setStats("Spending")}>
            Spending
          </Button>
        </div>
        <div className="grow basis-auto ">
          <Button type="base" onClick={() => setStats("Type")}>
            Type
          </Button>
        </div>
        <div className="grow basis-auto ">
          <Button type="base" onClick={() => setStats("Budgets")}>
            Budgets
          </Button>
        </div>
      </div>
      <IncomesAndExpensesStatistics />
    </div>
  );
}

export default Statistics;
