import { formatCurrency, formatDate, formatMonth } from "../../utils/helpers";
import Operations from "../Operations";

function renderCell(data, data2) {
  switch (data2.type) {
    case "text":
      return (
        <td
          key={data2.key}
          className="p-3 font-poppins  text-sm text-gray-700 whitespace-nowrap"
        >
          {data[data2.key]}
        </td>
      );
    case "number":
      return (
        <td
          key={data2.key}
          className="p-3 font-poppins font-semibold text-sm text-gray-700 whitespace-nowrap"
        >
          {data[data2.key]}
        </td>
      );
    case "money":
      return (
        <td
          key={data2.key}
          className="p-3 font-poppins font-semibold text-sm text-gray-700 whitespace-nowrap"
        >
          {formatCurrency(data[data2.key])}
        </td>
      );
    case "date":
      return (
        <td
          key={data2.key}
          className="p-3 font-poppins text-sm text-gray-700 whitespace-nowrap"
        >
          {formatDate(data[data2.key])}
        </td>
      );
    case "month":
      return (
        <td
          key={data2.key}
          className="p-3 font-poppins text-sm text-gray-700 whitespace-nowrap"
        >
          {formatMonth(data[data2.key])}
        </td>
      );
    case "badge":
      return (
        <td
          className="p-3 font-poppins text-sm text-gray-700 whitespace-nowrap justify-center flex"
          key={data2.key}
        >
          <span
            className={
              data[data2.key] === "INCOME"
                ? "inline-flex items-center justify-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                : "inline-flex items-center justify-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
            }
          >
            {data[data2.key]}
          </span>
        </td>
      );
    case "operations":
      return (
        <td
          className="p-3 font-poppins text-sm text-gray-700 whitespace-nowrap justify-center flex"
          key={data2.key}
        >
          <Operations data={data} type={data2.dataType} />
        </td>
      );
    case "category":
      return (
        <td
          key={data2.key}
          className="p-3 font-poppins  text-sm text-gray-700 whitespace-nowrap"
        >
          <span className="inline-flex items-center justify-center rounded-md bg-gray-200 px-2 py-1 text-xs font-normal text-black ring-1 ring-inset ring-gray-400 ">
            {data.category_id ? data.categories.name : "No category"}
          </span>
        </td>
      );

    default:
      return null;
  }
}

function TableRow({ data, headData }) {
  return (
    <tr className="odd:bg-white even:bg-gray-200 hover:bg-blue-200 transition-all	">
      {headData.map((data2) => renderCell(data, data2))}
    </tr>
  );
}

export default TableRow;
