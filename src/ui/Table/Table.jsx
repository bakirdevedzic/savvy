import { useState } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import ReactPaginate from "react-paginate";

function Table({ headData, bodyData }) {
  const [parent] = useAutoAnimate();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const currentData = bodyData.slice(firstIndex, lastIndex);
  const numberOfPages = Math.ceil(bodyData.length / rowsPerPage);
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= numberOfPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };
  return (
    <div>
      <div className="mt-5 rounded-lg shadow overflow-auto">
        <table className="border min-w-max  w-full">
          <thead className="bg-primary-blue">
            <tr>
              {headData.map((data) => (
                <TableHead
                  title={data.title}
                  key={data.title}
                  width={data.width}
                />
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300" ref={parent}>
            {currentData ? (
              currentData.map((data, i) => {
                return <TableRow data={data} key={i} headData={headData} />;
              })
            ) : (
              <tr className="p-3 flex  text-2xl text-gray-600 bg-primary-white-2">
                <td>No data to show!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        pageCount={numberOfPages}
        onPageChange={({ selected }) => setCurrentPage(selected + 1)}
      />
    </div>
  );
}

export default Table;
