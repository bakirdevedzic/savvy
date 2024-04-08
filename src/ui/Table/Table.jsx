import TableHead from "./TableHead";
import TableRow from "./TableRow";

function Table({ headData, bodyData }) {
  return (
    <div className="mt-5 rounded-lg shadow overflow-auto">
      <table className="border min-w-max w-full">
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
        <tbody className="divide-y divide-gray-300">
          {bodyData ? (
            bodyData.map((data, i) => {
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
  );
}

export default Table;
