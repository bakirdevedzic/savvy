import Chart from "react-google-charts";

function IAEPieChart({ data }) {
  const formattedData = data.map(({ name, amount }) => [name, amount]);

  const data2 = [["Category", "Amount"], ...formattedData];
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data2}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default IAEPieChart;
