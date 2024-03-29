function BudgetTableRow({ data }) {
  return (
    <tr className="odd:bg-white even:bg-gray-200">
      <td className="p-3 font-poppins text-sm text-gray-700 whitespace-nowrap">
        {data.month}
      </td>
      <td className="p-3 font-poppins  text-sm text-gray-700 whitespace-nowrap">
        {data.planned}
      </td>
      <td className="p-3 font-poppins  text-sm text-gray-700 whitespace-nowrap">
        {data.spent}
      </td>
      <td className="p-3 font-poppins font-semibold text-sm text-green-700 whitespace-nowrap">
        {data.saved}
      </td>
    </tr>
  );
}

export default BudgetTableRow;
