import Chart from "react-google-charts";

function TypePieChart({ data }) {
  const options = {
    pieHole: 0.4,
    is3D: false,
    color: ["#3248F2", "#171215"],
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default TypePieChart;
