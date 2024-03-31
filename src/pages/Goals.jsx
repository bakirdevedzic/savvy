import { MdAddBox } from "react-icons/md";
import GoalsTable from "../features/Goals/GoalsTable";
import Button from "../ui/Button";
import { useState } from "react";
import Modal from "../ui/Modal";
import GoalCard from "../features/Goals/GoalCard";

function Goals() {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => {
    setShowModal(false);
  };
  return (
    <div className="max-w-[1700px] w-[100%] flex flex-col">
      <div className="mb-3">
        <Button type="base" onClick={() => setShowModal(true)}>
          <MdAddBox />
          Add new goal
        </Button>
      </div>

      <div className="flex items-center mb-2">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 sm:justify-center ">
          <GoalCard />
          <GoalCard />
          <GoalCard />
          <GoalCard />
        </div>
      </div>
      <p className="text-poppins text-2xl font-bold">History</p>
      <GoalsTable />
      <Modal visible={showModal} onClose={handleOnClose} />
    </div>
  );
}

export default Goals;
