import Chart from "react-google-charts";
import Spinner from "../../../ui/Spinner";

function SpendingBar({ data }) {
  return (
    <div>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
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
