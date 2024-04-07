import Table from "../../ui/Table/Table";

function BudgetTable({ budgets }) {
  const headData = [
    { title: "Month", width: 24, type: "month", key: "month" },
    { title: "Planned", width: 24, type: "money", key: "planned_amount" },
    { title: "Spent", width: 24, type: "money", key: "spent_amount" },
    { title: "Saved", width: 24, type: "money", key: "saved_amount" },
  ];
  const data = {
    id: 1,
    month: "March",
    planned: 5000,
    spent: 3000,
    saved: 2000,
  };
  const data2 = {
    id: 2,
    month: "February",
    planned: 8000,
    spent: 7000,
    saved: 1000,
  };
  const data3 = {
    id: 3,
    month: "January",
    planned: 10000,
    spent: 9000,
    saved: 1000,
  };
  return <Table headData={headData} bodyData={budgets} />;
}

export default BudgetTable;
