import Table from "../../ui/Table/Table";

function GoalsTable({ goals }) {
  const headData = [
    { title: "Name", width: 72, type: "text", key: "name" },
    { title: "Goal amount", width: 24, type: "money", key: "goal_amount" },
    { title: "Amount saved", width: 24, type: "money", key: "saved_amount" },
    { title: "Start date", width: 24, type: "date", key: "start_date" },
    { title: "Finished date", width: 24, type: "date", key: "finished_date" },
    { title: "Operations", width: 12, type: "text", key: "operations" },
  ];

  return (
    <div className="max-w-[1700px] w-[100%]">
      <Table headData={headData} bodyData={goals} />
    </div>
  );
}

export default GoalsTable;
