import { MdDelete } from "react-icons/md";
import { IoOpen } from "react-icons/io5";

function TransactionTableRow({ data }) {
  return (
    <tr className="odd:bg-white even:bg-gray-200">
      <td className="p-3 font-poppins text-sm text-gray-700 whitespace-nowrap">
        {data.id}
      </td>
      <td className="p-3 font-poppins  text-sm text-gray-700 whitespace-nowrap">
        {data.title.length > 50 ? data.title.slice(0, 50) + "..." : data.title}
      </td>
      <td className="p-3 font-poppins  text-sm text-gray-700 whitespace-nowrap">
        {data.description.length > 70
          ? data.description.slice(0, 70) + "..."
          : data.description}
      </td>
      <td className="p-3 font-poppins font-semibold text-sm text-gray-700 whitespace-nowrap">
        {data.amount}
      </td>
      <td className="p-3 font-poppins text-sm text-gray-700 whitespace-nowrap justify-center flex">
        <span
          className={
            data.type === "Income"
              ? "inline-flex items-center justify-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
              : "inline-flex items-center justify-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
          }
        >
          {data.type}
        </span>
      </td>
      <td className="p-3 font-poppins text-sm text-gray-700 whitespace-nowrap">
        {data.date}
      </td>
      <td className="p-3 font-poppins  text-xl text-gray-700 whitespace-nowrap flex flex-rows items-center align-middle justify-center gap-2">
        <MdDelete />
        <IoOpen />
      </td>
    </tr>
  );
}

export default TransactionTableRow;
