import { useState } from "react";
import IAEPieChart from "./IAEPieChart";
import PeriodPicker from "../PeriodPicker";
import { calculateIncomeStats } from "../../../utils/statisticsHelpers";
import { useSelector } from "react-redux";
import { getTransactions } from "../../Transactions/transactionsSlice";
import { getIncomeCategories } from "../../Categories/categoriesSlice";

function IncomeStatistics({ type }) {
  const [period, setPeriod] = useState(30);
  const transactions = useSelector(getTransactions);
  const incomeCategories = useSelector(getIncomeCategories);

  const incomeData = calculateIncomeStats(
    transactions,
    incomeCategories,
    period
  );

  return (
    <div className="flex flex-col ">
      <div className="font-almarai font-bold text-gray-800">
        This pie chart displays the percentage contribution of each income
        category to the total income. It offers a quick insight into the
        relative significance of different income sources.
      </div>
      <div>
        <PeriodPicker setPeriod={setPeriod} />
      </div>
      <div>
        <IAEPieChart data={incomeData} />
      </div>
    </div>
  );
}

export default IncomeStatistics;
