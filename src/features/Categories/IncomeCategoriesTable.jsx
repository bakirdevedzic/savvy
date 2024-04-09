import Table from "../../ui/Table/Table";

function IncomeCategoriesTable({ categories }) {
  const headData = [
    { title: "Category name", width: 24, type: "text", key: "name" },
    { title: "Transactions", width: 24, type: "text", key: "transactions" },
    {
      title: "Amount",
      width: 24,
      type: "money",
      key: "amount",
    },
    { title: "Operations", width: 8, type: "operations", key: "operations" },
  ];

  return <Table headData={headData} bodyData={categories} />;
}

export default IncomeCategoriesTable;
