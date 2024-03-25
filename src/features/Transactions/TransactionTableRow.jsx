function TransactionTableRow({ data }) {
  return (
    <tr className="odd:bg-white even:bg-gray-200">
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{data.id}</td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {data.title}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {data.amount}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        <span
          className={
            data.type === "Income"
              ? "p-1.5 text-xs font-medium uppercase tracking-wider text-green-700 rounded-lg bg-green-200"
              : "p-1.5 text-xs font-medium uppercase tracking-wider text-red-700 rounded-lg bg-red-200"
          }
        >
          {data.type}
        </span>
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {data.date}
      </td>
    </tr>
  );
}

export default TransactionTableRow;
