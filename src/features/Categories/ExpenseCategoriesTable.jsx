import Table from "../../ui/Table/Table";

function ExpenseCategoriesTable() {
  const headData = [
    { title: "Category name", width: 24, type: "text", key: "categoryName" },
    { title: "Transactions", width: 24, type: "text", key: "transactions" },
    {
      title: "Amount",
      width: 24,
      type: "number",
      key: "amount",
    },
    { title: "Operations", width: 8, type: "text", key: "operations" },
  ];
  const data = {
    id: 1,
    categoryName: "Food",
    transactions: 5,
    amount: 950,
    operations: "Edit | Delete",
  };
  const data2 = {
    id: 2,
    categoryName: "Entertainment",
    transactions: 4,
    amount: 500,
    operations: "Edit | Delete",
  };
  const data3 = {
    id: 3,
    categoryName: "Books",
    transactions: 2,
    amount: 60,
  };
  return <Table headData={headData} bodyData={[data, data2, data3]} />;
}

export default ExpenseCategoriesTable;
