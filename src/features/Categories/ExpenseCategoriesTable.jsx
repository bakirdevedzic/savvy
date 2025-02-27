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

  categories = categories.sort((a, b) => b.amount - a.amount);
  return <Table headData={headData} bodyData={categories} rowsPerPage={5} />;
}

export default ExpenseCategoriesTable;
