function PeriodPicker({ setPeriod }) {
  return (
    <div className="mt-3 mb-2">
      <label htmlFor="period" className="text-lg mr-2 font-poppins">
        Period:
      </label>
      <select
        onChange={(e) => setPeriod(e.target.value)}
        className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-8  p-1 font-poppins"
        defaultValue={"2"}
      >
        <option value="1">Last 7 days</option>
        <option value="2">Last 30 days</option>
        <option value="3">Last 3 months</option>
        <option value="4">Last 6 months</option>
        <option value="5">Last year</option>
        <option value="6">This month</option>
      </select>
    </div>
  );
}

export default PeriodPicker;
