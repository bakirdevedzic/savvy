import { useState } from "react";
import IAEPieChart from "./IAEPieChart";
import PeriodPicker from "../PeriodPicker";

function IncomesAndExpensesStatistics({ type }) {
  const [period, setPeriod] = useState(1);
  console.log(period);
  return (
    <div className="flex flex-col">
      <div className="font-almarai font-bold text-gray-800">
        This pie chart displays the percentage contribution of each income
        category to the total income. It offers a quick insight into the
        relative significance of different income sources.
      </div>
      <div>
        <PeriodPicker setPeriod={setPeriod} />
      </div>
      <div>
        <IAEPieChart />
      </div>
    </div>
  );
}

export default IncomesAndExpensesStatistics;
