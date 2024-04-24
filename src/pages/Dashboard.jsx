import InfoCard1 from "../ui/InfoCard";

function Dashboard() {
  return (
    <div className="max-w-[1700px] w-[100%]">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between gap-3 flex-wrap">
          <div className="grow">
            <InfoCard1 label="Just a tets" amount={475425} color="green" />
          </div>
          <div className="grow">
            <InfoCard1 label="Just a tets" amount={475425} color="green" />
          </div>
          <div className="grow">
            <InfoCard1 label="Just a tets" amount={475425} color="green" />
          </div>
          <div className="grow">
            <InfoCard1 label="Just a tets" amount={475425} color="green" />
          </div>
        </div>
        <div>Statistika</div>
        <div>Transakcije</div>
      </div>
    </div>
  );
}

export default Dashboard;
