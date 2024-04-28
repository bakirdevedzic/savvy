import { MdAddBox } from "react-icons/md";
import Button from "../ui/Button";
import InfoCard from "../ui/InfoCard";
import BudgetTable from "../features/Budget/BudgetTable.jsx";

import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import BudgetForm from "../features/Budget/BudgetForm.jsx";

import { useDispatch, useSelector } from "react-redux";
import { editBudgetAsync, getBudgets } from "../features/Budget/budgetSlice.js";
import {
  calculateMonthSpendings,
  isFromLastMonth,
} from "../utils/budgetHelpers.js";
import { getTransactions } from "../features/Transactions/transactionsSlice.js";

function Budget() {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState(null);

  const dispatch = useDispatch();

  const budgets = useSelector(getBudgets);

  const currentBudget2 = useSelector((state) => state.budgets.currentBudget);
  const transactions = useSelector(getTransactions);
  const currentMonth = new Date();

  useEffect(() => {
    const isThereFromLastMonth = budgets.findIndex((budget) =>
      isFromLastMonth(new Date(budget.month))
    );

    if (
      isThereFromLastMonth >= 0 &&
      budgets[isThereFromLastMonth].spent_amount === null
    ) {
      const spentAmount = calculateMonthSpendings(
        transactions,
        budgets[isThereFromLastMonth].month
      );

      dispatch(
        editBudgetAsync({
          ...budgets[isThereFromLastMonth],
          spent_amount: spentAmount,
          saved_amount:
            budgets[isThereFromLastMonth].planned_amount - spentAmount > 0
              ? budgets[isThereFromLastMonth].planned_amount - spentAmount
              : 0,
        })
      );
    }
  }, []);

  const thisMonthSpending = calculateMonthSpendings(transactions, currentMonth);

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
      return <BudgetForm onClose={handleOnClose} />;
    } else if (action === "update") {
      return (
        <BudgetForm onClose={handleOnClose} budgetToEdit={currentBudget2} />
      );
    }

    return null;
  };
  return (
    <div className="max-w-[1700px] w-[100%] grid-rows grid gap-3 auto-rows-max	">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 us:flex us:flex-col max-w-max">
        <InfoCard label="Balance" amount={45685} />
        <InfoCard
          label="Budget for this month"
          amount={
            currentBudget2?.planned_amount ? currentBudget2?.planned_amount : 0
          }
        />
        <InfoCard
          label="Spent this month"
          amount={thisMonthSpending}
          color="red"
        />
        <InfoCard
          label="Remaining for this month"
          amount={
            currentBudget2?.planned_amount - thisMonthSpending
              ? currentBudget2?.planned_amount - thisMonthSpending
              : 0
          }
          color={`${currentBudget2?.planned_amount - thisMonthSpending > 0 ? "green" : "red"}`}
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
          {currentBudget2 && (
            <Button type="base" onClick={() => handleUpdateBudget()}>
              <MdAddBox />
              Edit budget
            </Button>
          )}
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
