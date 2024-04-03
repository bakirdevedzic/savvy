import Table from "../../ui/Table/Table";

function TransactionsTable() {
  const headData = [
    { title: "Title", width: 12, type: "text", key: "title" },
    { title: "Description", width: 12, type: "text", key: "description" },
    { title: "Amount", width: 10, type: "number", key: "amount" },
    { title: "Type", width: 10, type: "badge", key: "type" },
    { title: "Date", width: 10, type: "date", key: "date" },
    { title: "Operations", width: 10, type: "text", key: "operations" },
  ];
  const data = {
    id: 1,
    title: "Salary for month June",
    description:
      "I got my salary for the month of June 2023 from my employer of 5000 USD per month I got my salary for the month of June 2023 from my employer of 5000 USD per month",
    amount: 5000,
    type: "Income",
    date: "2022-06-01",
    operations: "Edit|Delete",
  };
  const data2 = {
    id: 2,
    title: "Paid bills",
    description: "I paid my bills for the month of June 2023",
    amount: 250,
    type: "Expense",
    date: "2022-06-01",
    operations: "Edit|Delete",
  };
  const data3 = {
    id: 3,
    title: "Paid bills",
    description: "I paid my bills for the month of June 2024",
    amount: 250,
    type: "Expense",
    date: "2022-06-01",
    operations: "Edit|Delete",
  };
  return <Table headData={headData} bodyData={[data, data2, data3]} />;
}

export default TransactionsTable;
