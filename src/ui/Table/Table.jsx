import { useState } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import ReactPaginate from "react-paginate";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Table({ headData, bodyData }) {
  const [parent] = useAutoAnimate();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const currentData = bodyData?.slice(firstIndex, lastIndex);
  const numberOfPages = Math.ceil(bodyData?.length / rowsPerPage);

  const showNextButton = currentPage !== numberOfPages;
  const showPrevButton = currentPage !== 1;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= numberOfPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };
  return (
    <div className="overflow-auto">
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

      {numberOfPages > 1 && (
        <ReactPaginate
          breakLabel={<span className="mr-4">...</span>}
          nextLabel={
            showNextButton ? (
              <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md text-primary-black  border-[1px] border-solid	border-slate-300 hover:bg-gray-400">
                <FaChevronRight />
              </span>
            ) : (
              <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md text-slate-500  border-[1px] border-solid	border-slate-300 cursor-not-allowed">
                <FaChevronRight />
              </span>
            )
          }
          onPageChange={({ selected }) => setCurrentPage(selected + 1)}
          pageCount={numberOfPages}
          previousLabel={
            showPrevButton ? (
              <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md mr-4 text-primary-black  border-[1px] border-solid	border-slate-300 hover:bg-gray-400">
                <FaChevronLeft />
              </span>
            ) : (
              <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md mr-4 text-slate-500  border-[1px] border-solid	border-slate-300 cursor-not-allowed ">
                <FaChevronLeft />
              </span>
            )
          }
          containerClassName="flex items-center justify-center mt-8 mb-4 flex-wrap	"
          pageClassName="block border-[1px] border-solid	border-slate-300	 font-bold hover:bg-gray-400 w-10 h-10 flex items-center justify-center rounded-md mr-4 bg-gray-200"
          activeClassName="text-white border-0 bg-primary-blue border-0 hover:bg-primary-blue"
        />
      )}
    </div>
  );
}

export default Table;
