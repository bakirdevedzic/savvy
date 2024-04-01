import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { useState } from "react";
import { IoCheckbox } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import GoalForm from "./GoalForm";
import ConfirmationTab from "../../ui/ConfirmationTab";

function GoalCard() {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState(null);

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

  const renderModalContent = () => {
    if (action === "update") {
      return <GoalForm />;
    } else if (action === "finish") {
      return <ConfirmationTab onClick={setShowModal} />;
    }
    // Default content or no content if action is not set
    return null;
  };

  return (
    <div className="grid grid-rows  bg-white rounded-lg border-2 border-solid shadow-xl p-5 max-w-max">
      <div className="grid grid-cols-[auto_auto] w-[100%] mb-3 us:flex us:flex-col us:align-middle us:m-auto ">
        <div className="justify-start">
          <p className="text-base font-poppins font-bold w-[100%] text-gray-700">
            New Iphone 15 New Iphone 15 New Iphone 15 New Iphone 15
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
            <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
            {/* OBRATITI PAŽNJU DA KADA IDE IZNAD 100% DA TO BUDE 100% */}
          </div>

          <div className="flex flex-rows justify-between">
            <p>$450</p>
            <p>$800</p>
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
