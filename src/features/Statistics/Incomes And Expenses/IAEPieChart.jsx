import Chart from "react-google-charts";
import Spinner from "../../../ui/Spinner";

function IAEPieChart({ data }) {
  const formattedData = data.map(({ name, amount }) => [name, amount]);

  const data2 = [["Category", "Amount"], ...formattedData];
  const options = {
    legend: { position: "top", alignment: "start" },
    colors: [
      "#e74c3c",
      "#2ecc71",
      "#f1c40f",
      "#34495e",
      "#7f8c8d",
      "#8e44ad",
      "#00b894",
      "#6c5ce7",
    ],
    fontName: "Poppins",
    fontWeight: "700",
  };
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data2}
        width={"100%"}
        height={"400px"}
        options={options}
        loader={
          <div className="flex justify-center w-full">
            <Spinner />
          </div>
        }
      />
    </div>
  );
}

export default IAEPieChart;
