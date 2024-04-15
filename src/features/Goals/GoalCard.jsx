import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { useState } from "react";
import { IoCheckbox } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import GoalUpdateForm from "./GoalUpdateForm";
import ConfirmationTab from "../../ui/ConfirmationTab";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { editGoalAsync } from "./goalsSlice";

function GoalCard({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState(null);
  const [loading, setLoading] = useState(false);
  const status = useSelector((state) => state.goals.status);
  const dispatch = useDispatch();

  const text =
    data.saved_amount < data.goal_amount
      ? "You haven't reached goal yet!"
      : "Once you finish goal, you won't be able to update it!";
  const title = "Are you sure you want to finish goal?";

  function handleUpdateGoal() {
    setShowModal(true);
    setAction("update");
  }

  function handleFinishGoal() {
    setShowModal(true);
    setAction("finish");
  }
  const handleOnClose = () => {
    setShowModal(false);
    setAction(null);
  };

  const handleGoalFinished = async () => {
    let date_finished = new Date();
    const offset = date_finished.getTimezoneOffset();
    date_finished = new Date(date_finished.getTime() - offset * 60 * 1000);
    setLoading(true);
    await dispatch(
      editGoalAsync({ ...data, active: false, finished_date: date_finished })
    );
    if (status === "succeeded") {
      setLoading(false);
      setShowModal(false);
      setAction(null);
    }
  };
  const renderModalContent = () => {
    if (action === "update") {
      return <GoalUpdateForm goalToEdit={data} onClose={handleOnClose} />;
    } else if (action === "finish") {
      return (
        <ConfirmationTab
          onClick={setShowModal}
          text={text}
          title={title}
          confirm={handleGoalFinished}
          loading={loading}
        />
      );
    }

    return null;
  };

  const percentageCalc = (data.saved_amount / data.goal_amount) * 100;
  const percentage = percentageCalc > 100 ? 100 : percentageCalc;

  return (
    <div className="grid grid-rows  bg-white rounded-lg border-2 border-solid shadow-xl p-5 max-w-max">
      <div className="grid grid-cols-[auto_auto] w-[100%] mb-3 us:flex us:flex-col us:align-middle us:m-auto ">
        <div className="justify-start">
          <p className="text-base font-poppins font-bold w-[100%] text-gray-700">
            {data.name}
          </p>
        </div>

        <div className="grid grid-rows-2 items-end gap-2 content-end  w-[170px] justify-end us:gap-2 us:mb-2 us:grid-cols-2 us:w-[100%] us:justify-center us:grid-rows-1">
          <Button type="small" onClick={() => handleUpdateGoal()}>
            <GrUpdate />
            Update goal
          </Button>
          <Button type="small" onClick={() => handleFinishGoal()}>
            <IoCheckbox />
            Finish goal
          </Button>
        </div>
      </div>

      <div className="pt-2">
        <div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              style={{
                backgroundColor: "#2563eb",
                height: "0.625rem",
                borderRadius: "9999px",
                width: `${percentage}%`,
              }}
            ></div>
          </div>

          <div className="flex flex-rows justify-between">
            <p>{formatCurrency(data.saved_amount)}</p>
            <p>{formatCurrency(data.goal_amount)}</p>
          </div>
        </div>
      </div>
      <Modal
        visible={showModal}
        onClose={handleOnClose}
        render={renderModalContent()}
      />
    </div>
  );
}

export default GoalCard;
