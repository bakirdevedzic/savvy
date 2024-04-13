import Table from "../../ui/Table/Table";

function ExpenseCategoriesTable({ categories }) {
  const headData = [
    { title: "Category name", width: 4, type: "text", key: "name" },
    { title: "Transactions", width: 2, type: "text", key: "transactions" },
    {
      title: "Amount",
      width: 2,
      type: "money",
      key: "amount",
    },
    {
      title: "Operations",
      width: 2,
      type: "operations",
      key: "operations",
      dataType: "categories",
    },
  ];

  return <Table headData={headData} bodyData={categories} />;
}

export default ExpenseCategoriesTable;
