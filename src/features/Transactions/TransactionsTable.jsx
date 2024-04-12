import Table from "../../ui/Table/Table";

function TransactionsTable({ transactions }) {
  const headData = [
    { title: "Title", width: 4, type: "text", key: "name" },
    { title: "Description", width: 4, type: "text", key: "description" },
    { title: "Amount", width: 2.5, type: "money", key: "amount" },
    { title: "Type", width: 1.5, type: "badge", key: "type" },
    { title: "Category", width: 2.5, type: "text", key: "category" },
    { title: "Date", width: 1, type: "date", key: "date" },
    {
      title: "Operations",
      width: 1,
      type: "operations",
      key: "operations",
      dataType: "transactions",
    },
  ];

  return <Table headData={headData} bodyData={transactions} />;
}

export default TransactionsTable;
