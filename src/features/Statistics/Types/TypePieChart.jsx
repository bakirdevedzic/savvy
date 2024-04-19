import Chart from "react-google-charts";
import Spinner from "../../../ui/Spinner";

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
        loader={
          <div className="flex justify-center w-full">
            <Spinner />
          </div>
        }
      />
    </div>
  );
}

export default TypePieChart;
