import Table from "../../ui/Table/Table";

function GoalsTable() {
  const headData = [
    { title: "Name", width: 72, type: "text", key: "name" },
    { title: "Goal amount", width: 24, type: "number", key: "goalAmount" },
    { title: "Amount saved", width: 24, type: "number", key: "amountSaved" },
    { title: "Start date", width: 24, type: "date", key: "startDate" },
    { title: "Finished date", width: 24, type: "date", key: "finishedDate" },
    { title: "Operations", width: 12, type: "text", key: "operations" },
  ];
  const bodyData = [
    {
      id: 1,
      name: "Goal 1",
      goalAmount: 5000,
      amountSaved: 6500,
      startDate: "2022-06-01",
      finishedDate: "2022-06-01",
      operations: "Operations",
    },
    {
      id: 2,
      name: "Goal 1",
      goalAmount: 5000,
      amountSaved: 5000,
      startDate: "2022-06-01",
      finishedDate: "2022-06-01",
      operations: "Operations",
    },
  ];
  return (
    <div className="max-w-[1700px] w-[100%]">
      <Table headData={headData} bodyData={bodyData} />
    </div>
  );
}

export default GoalsTable;
