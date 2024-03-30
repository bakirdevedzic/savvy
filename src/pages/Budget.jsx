import { MdAddBox } from "react-icons/md";
import Button from "../ui/Button";
import InfoCard from "../ui/InfoCard";
import BudgetTable from "../features/Budget/BudgetTable.jsx";

import { useState } from "react";
import Modal from "../ui/Modal";
import BudgetForm from "../features/Budget/BudgetForm.jsx";

function Budget() {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => {
    setShowModal(false);
  };
  return (
    <div className="max-w-[1700px] w-[100%] grid-rows grid gap-3 auto-rows-max	">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 us:flex us:flex-col max-w-max">
        <InfoCard label="Total amount" amount="$45,685" />
        <InfoCard label="Budget for this month" amount="$10,000" />
        <InfoCard label="Spent this month" amount="$6,450" color="red" />
        <InfoCard
          label="Remaining for this month"
          amount="$3,550"
          color="green"
        />
      </div>
      <div className="h-[100%]">
        <Button type="base" onClick={() => setShowModal(true)}>
          <MdAddBox />
          Add new budget
        </Button>
      </div>
      <div className="overflow-auto">
        <p className="text-poppins text-2xl font-bold">History</p>
        <BudgetTable />
      </div>
      <Modal
        visible={showModal}
        onClose={handleOnClose}
        render={<BudgetForm />}
      />
    </div>
  );
}

export default Budget;
