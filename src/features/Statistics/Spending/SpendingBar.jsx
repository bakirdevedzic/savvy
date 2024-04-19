import Chart from "react-google-charts";
import Spinner from "../../../ui/Spinner";

function SpendingBar({ data }) {
  const options = {
    legend: { position: "top", alignment: "start" },
    colors: ["#2ecc71", "#ff7675"],
    fontName: "Poppins",
    fontWeight: "700",
  };
  return (
    <div>
      <Chart
        chartType="Bar"
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

export default SpendingBar;
