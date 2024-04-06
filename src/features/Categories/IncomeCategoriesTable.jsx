import Table from "../../ui/Table/Table";

function IncomeCategoriesTable() {
  const headData = [
    { title: "Category name", width: 24, type: "text", key: "categoryName" },
    { title: "Transactions", width: 24, type: "text", key: "transactions" },
    {
      title: "Amount",
      width: 24,
      type: "money",
      key: "amount",
    },
    { title: "Operations", width: 8, type: "text", key: "operations" },
  ];
  const data = {
    id: 1,
    categoryName: "Salary",
    transactions: 1,
    amount: 5000,
    operations: "Edit | Delete",
  };
  const data2 = {
    id: 2,
    categoryName: "Freelance work",
    transactions: 5,
    amount: 2500,
    operations: "Edit | Delete",
  };
  const data3 = {
    id: 3,
    categoryName: "Bonus",
    transactions: 1,
    amount: 2500,
    operations: "Edit | Delete",
  };
  return <Table headData={headData} bodyData={[data, data2, data3]} />;
}

export default IncomeCategoriesTable;
