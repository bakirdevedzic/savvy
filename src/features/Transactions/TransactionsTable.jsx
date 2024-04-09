import Table from "../../ui/Table/Table";

function TransactionsTable({ transactions }) {
  const headData = [
    { title: "Title", width: 12, type: "text", key: "name" },
    { title: "Description", width: 12, type: "text", key: "description" },
    { title: "Amount", width: 10, type: "money", key: "amount" },
    { title: "Type", width: 10, type: "badge", key: "type" },
    { title: "Category", width: 10, type: "text", key: "category" },
    { title: "Date", width: 10, type: "date", key: "date" },
    { title: "Operations", width: 10, type: "operations", key: "operations" },
  ];

  return <Table headData={headData} bodyData={transactions} />;
}

export default TransactionsTable;
