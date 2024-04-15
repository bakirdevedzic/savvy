import { IoAddCircle } from "react-icons/io5";
import Button from "./Button";
import Spinner from "./Spinner";

function ButtonConfirm({ status }) {
  return (
    <div className="flex justify-end mt-2">
      <Button type="base">
        {status === "loading" ? (
          <Spinner />
        ) : (
          <div className="flex flex-row items-center">
            <IoAddCircle />
            Submit
          </div>
        )}
      </Button>
    </div>
  );
}

export default ButtonConfirm;
