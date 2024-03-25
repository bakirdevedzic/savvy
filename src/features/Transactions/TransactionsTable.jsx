import TransactionTableRow from "./TransactionTableRow";

function TransactionsTable() {
  const data = {
    id: 1,
    title: "Salary for month June",
    amount: 5000,
    type: "Income",
    date: "2022-06-01",
  };
  const data2 = {
    id: 2,
    title: "Paid bills",
    amount: 250,
    type: "Expense",
    date: "2022-06-01",
  };
  return (
    <div className="mt-5 rounded-lg shadow overflow-auto">
      <table className="border min-w-max w-full">
        <thead className="bg-primary-blue">
          <tr>
            <th className="w-20 p-3 text-sm font-semibold text-primary-white-2 tracking-wide">
              ID
            </th>
            <th className="p-3 text-sm font-semibold text-primary-white-2 tracking-wide">
              Title
            </th>
            <th className="w-24 p-3 text-sm font-semibold text-primary-white-2 tracking-wide">
              Amount
            </th>
            <th className="w-24 p-3 text-sm font-semibold text-primary-white-2 tracking-wide">
              Type
            </th>
            <th className="w-32 p-3 text-sm font-semibold text-primary-white-2 tracking-wide">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          <TransactionTableRow data={data} />
          <TransactionTableRow data={data2} />
          <TransactionTableRow data={data} />
          <TransactionTableRow data={data} />
          <TransactionTableRow data={data2} />
          <TransactionTableRow data={data} />
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsTable;
