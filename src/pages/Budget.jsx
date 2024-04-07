import { MdAddBox } from "react-icons/md";
import Button from "../ui/Button";
import InfoCard from "../ui/InfoCard";
import BudgetTable from "../features/Budget/BudgetTable.jsx";

import { useState } from "react";
import Modal from "../ui/Modal";
import BudgetForm from "../features/Budget/BudgetForm.jsx";
import UpdateBudgetForm from "../features/Budget/UpdateBudgetForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  getBudgets,
  getCurrentBudget,
} from "../features/Budget/budgetSlice.js";
import Spinner from "../ui/Spinner.jsx";

function Budget() {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState(null);

  const dispatch = useDispatch();

  const budgets = useSelector(getBudgets);
  const status = useSelector((state) => state.budgets.status);
  const error = useSelector((state) => state.budgets.error);
  const currentBudget = useSelector(getCurrentBudget);

  if (status === "loading") {
    return <Spinner />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  function handleAddNewBudget() {
    setShowModal(true);
    setAction("add");
  }

  function handleUpdateBudget() {
    setShowModal(true);
    setAction("update");
  }
  const handleOnClose = () => {
    setShowModal(false);
    setAction(null);
  };

  const renderModalContent = () => {
    if (action === "add") {
      return <BudgetForm />;
    } else if (action === "update") {
      return <UpdateBudgetForm />;
    }

    return null;
  };
  return (
    <div className="max-w-[1700px] w-[100%] grid-rows grid gap-3 auto-rows-max	">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 us:flex us:flex-col max-w-max">
        <InfoCard label="Total amount" amount={45685} />
        <InfoCard label="Budget for this month" amount={currentBudget} />
        <InfoCard label="Spent this month" amount={6450} color="red" />
        <InfoCard
          label="Remaining for this month"
          amount={3570}
          color="green"
        />
      </div>
      <div className="h-[100%] flex flex-row gap-3 us:flex-col">
        <div>
          <Button type="base" onClick={() => handleAddNewBudget()}>
            <MdAddBox />
            Add new budget
          </Button>
        </div>
        <div>
          <Button type="base" onClick={() => handleUpdateBudget()}>
            <MdAddBox />
            Edit budget
          </Button>
        </div>
      </div>
      <div className="overflow-auto">
        <p className="text-poppins text-2xl font-bold">
          Old and future budgets
        </p>
        <BudgetTable budgets={budgets} />
      </div>
      <Modal
        visible={showModal}
        onClose={handleOnClose}
        render={renderModalContent()}
      />
    </div>
  );
}

export default Budget;
