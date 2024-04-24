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

export default IncomeCategoriesTable;
