import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

import { useDispatch } from "react-redux";
import { deleteTransactionAsync } from "../features/Transactions/transactionsSlice";
import { useState } from "react";
import Modal from "./Modal";
import TransactionsForm from "../features/Transactions/TransactionsForm";
import ConfirmationTab from "./ConfirmationTab";
import BudgetForm from "../features/Budget/BudgetForm";
import { deleteBudgetAsync } from "../features/Budget/budgetSlice";

function Operations({ data, type }) {
  const dispatch = useDispatch();
  const [action, setAction] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleDelete() {
    setAction("delete");
    setShowModal(true);
  }

  function handleEdit() {
    setAction("edit");
    setShowModal(true);
  }

  function confirmDelete() {
    setLoading(true);

    if (type === "transactions") {
      dispatch(deleteTransactionAsync(data.id)).then(() => {
        setLoading(false);
        setShowModal(false);
      });
    } else if (type === "budgets") {
      dispatch(deleteBudgetAsync(data.id)).then(() => {
        setLoading(false);
        setShowModal(false);
      });
    }
  }

  const renderModalContent = () => {
    if (action === "edit") {
      if (type === "transactions") {
        return (
          <TransactionsForm onClose={handleOnClose} transactionToEdit={data} />
        );
      }
      if (type === "budgets") {
        return <BudgetForm onClose={handleOnClose} budgetToEdit={data} />;
      }
    } else if (action === "delete") {
      if (type === "transactions") {
        return (
          <ConfirmationTab
            onClick={setShowModal}
            confirm={confirmDelete}
            title="Delete Transaction"
            text="Are you sure you want to delete this transaction?"
            loading={loading}
          />
        );
      } else if (type === "budgets") {
        return (
          <ConfirmationTab
            onClick={setShowModal}
            confirm={confirmDelete}
            title="Delete Budget"
            text="Are you sure you want to delete this budget?"
            loading={loading}
          />
        );
      }
    }

    return null;
  };

  const handleOnClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <div>
        <div className="flex flex-row text-lg text-gray-600 gap-2">
          <div>
            <RiEdit2Fill className="cursor-pointer" onClick={handleEdit} />
          </div>
          <div>
            <MdDelete className="cursor-pointer" onClick={handleDelete} />
          </div>
        </div>
      </div>

      <div className="box-border">
        <Modal
          visible={showModal}
          onClose={handleOnClose}
          render={renderModalContent()}
        />
      </div>
    </div>
  );
}

export default Operations;
