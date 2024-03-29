import { MdAddBox } from "react-icons/md";
import Button from "../ui/Button";
import InfoCard from "../ui/InfoCard";
import BudgetTable from "../features/Budget/BudgetTable.jsx";

import { useState } from "react";
import Modal from "../ui/Modal";

function Budget() {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => {
    setShowModal(false);
  };
  return (
    <div className="max-w-[1700px] w-[100%] grid-rows-[120px_1fr_1fr] grid gap-3">
      <div className="grid grid-cols-4">
        <InfoCard label="Total amount" amount="$45,6845" />
        <InfoCard label="Budget for this month" amount="$10,000" />
        <InfoCard label="Spent this month" amount="$6,450" color="red" />
        <InfoCard
          label="Remaining for this month"
          amount="$3,550"
          color="green"
        />
      </div>
      <div>
        <Button type="base" onClick={() => setShowModal(true)}>
          <MdAddBox />
          Add new budget
        </Button>
      </div>
      <div>
        <p>History</p>
        <BudgetTable />
      </div>
      <Modal visible={showModal} onClose={handleOnClose} />
    </div>
  );
}

export default Budget;
