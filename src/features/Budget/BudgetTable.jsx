import Table from "../../ui/Table/Table";

function BudgetTable({ budgets }) {
  const headData = [
    { title: "Month", width: 2, type: "month", key: "month" },
    { title: "Planned", width: 3, type: "money", key: "planned_amount" },
    { title: "Spent", width: 3, type: "money", key: "spent_amount" },
    { title: "Saved", width: 3, type: "money", key: "saved_amount" },
  ];

  return <Table headData={headData} bodyData={budgets} />;
}

export default BudgetTable;
