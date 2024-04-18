import Chart from "react-google-charts";

function SpendingBar({ data }) {
  return (
    <div>
      <Chart chartType="Bar" width="100%" height="400px" data={data} />
    </div>
  );
}

export default SpendingBar;
