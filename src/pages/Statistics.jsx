import { useState } from "react";
import Button from "../ui/Button";

import IncomeStatistics from "../features/Statistics/Incomes And Expenses/IncomesStatistics";
import ExpenseStatistics from "../features/Statistics/Incomes And Expenses/ExpenseStatistics";

function Statistics() {
  const [stats, setStats] = useState("None");
  console.log(stats);
  return (
    <div className="max-w-[1700px] w-[100%] grid grid-rows-[auto_auto] gap-5">
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
      {stats === "None" ? (
        <p className="text-center font-poppins text-2xl text-gray-400 font-bold">
          Click one of the buttons above to see statistics!
        </p>
      ) : (
        <div className="flex justify-center overflow-auto">
          <div className="bg-white rounded-lg shadow p-4 overflow-auto w-[600px] us:w-[auto]">
            {stats === "Incomes" && <IncomeStatistics />}
            {stats === "Expenses" && <ExpenseStatistics />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Statistics;
