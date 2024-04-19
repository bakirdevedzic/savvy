import Chart from "react-google-charts";

function BudgetsBar({ data }) {
  const options = {
    chartArea: { width: "50%" },
    hAxis: {
      title: "Amount",
      minValue: 0,
    },
    vAxis: {
      title: "Month",
    },
  };
  return (
    <div>
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default BudgetsBar;
