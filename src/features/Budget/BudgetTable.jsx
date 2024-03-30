import BudgetTableRow from "./BudgetTableRow";

function BudgetTable() {
  const data = {
    month: "March",
    planned: "$5000",
    spent: "$3000",
    saved: "$2000",
  };
  const data2 = {
    month: "February",
    planned: "$8000",
    spent: "$7000",
    saved: "$1000",
  };
  return (
    <div className="mt-5 rounded-lg shadow overflow-auto min-w-max inline-block">
      <table className="border ">
        <thead className="bg-primary-blue">
          <tr>
            <th className="w-24 p-3 text-poppins text-sm font-bold text-primary-white-2 tracking-wide border-r">
              Month
            </th>
            <th className="w-24 p-3 text-poppins text-sm font-bold text-primary-white-2 tracking-wide border-r">
              Planned
            </th>
            <th className="w-24 p-3 text-poppins text-sm font-bold text-primary-white-2 tracking-wide border-r">
              Spent
            </th>
            <th className="w-24 text-poppins p-3 text-sm font-bold text-primary-white-2 tracking-wide border-r">
              Saved
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          <BudgetTableRow data={data} />
          <BudgetTableRow data={data2} />
          <BudgetTableRow data={data} />
          <BudgetTableRow data={data} />
          <BudgetTableRow data={data2} />
          <BudgetTableRow data={data} />
        </tbody>
      </table>
    </div>
  );
}

export default BudgetTable;
