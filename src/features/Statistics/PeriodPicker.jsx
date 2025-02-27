import { daysSinceMonthStart } from "../../utils/statisticsHelpers";

function PeriodPicker({ setPeriod }) {
  return (
    <div className="mt-3 mb-2">
      <label htmlFor="period" className="text-lg mr-2 font-poppins">
        Period:
      </label>
      <select
        onChange={(e) => setPeriod(e.target.value)}
        className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-8  p-1 font-poppins"
        defaultValue={"30"}
      >
        <option value="7">Last 7 days</option>
        <option value="30">Last 30 days</option>
        <option value="90">Last 3 months</option>
        <option value="180">Last 6 months</option>
        <option value="365">Last year</option>
        <option value={daysSinceMonthStart()}>This month</option>
      </select>
    </div>
  );
}

export default PeriodPicker;
