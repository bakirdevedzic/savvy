import Chart from "react-google-charts";
import Spinner from "../../../ui/Spinner";

function SpendingBar({ data }) {
  const options = {
    legend: { position: "top", alignment: "bottom" },

    colors: ["#2ecc71", "#ff7675"],
    fontName: "Poppins",
    fontWeight: "700",
  };

  const originalWarn = console.warn;

  console.warn = function (...args) {
    const arg = args && args[0];

    if (arg && arg.includes("Attempting to load version '51' of Google Charts"))
      return;

    originalWarn(...args);
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
