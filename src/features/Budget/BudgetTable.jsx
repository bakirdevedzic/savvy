import Table from "../../ui/Table/Table";

function BudgetTable() {
  const headData = [
    { title: "Month", width: 24, type: "text", key: "month" },
    { title: "Planned", width: 24, type: "number", key: "planned" },
    { title: "Spent", width: 24, type: "number", key: "spent" },
    { title: "Saved", width: 24, type: "number", key: "saved" },
  ];
  const data = {
    id: 1,
    month: "March",
    planned: "$5000",
    spent: "$3000",
    saved: "$2000",
  };
  const data2 = {
    id: 2,
    month: "February",
    planned: "$8000",
    spent: "$7000",
    saved: "$1000",
  };
  const data3 = {
    id: 3,
    month: "January",
    planned: "$10000",
    spent: "$9000",
    saved: "$1000",
  };
  return <Table headData={headData} bodyData={[data, data2, data3]} />;
}

export default BudgetTable;
