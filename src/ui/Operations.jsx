import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { deleteTransaction } from "../services/apiTransactions";
import { useDispatch } from "react-redux";
import { deleteTransactionAsync } from "../features/Transactions/transactionsSlice";
import { useState } from "react";
import Modal from "./Modal";
import TransactionsForm from "../features/Transactions/TransactionsForm";

function Operations({ data }) {
  const dispatch = useDispatch();
  function handleDeleteTransaction() {
    dispatch(deleteTransactionAsync(data.id));
  }
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <div>
        <div className="flex flex-row text-lg text-gray-600 gap-2">
          <div>
            <RiEdit2Fill
              className="cursor-pointer"
              onClick={() => setShowModal(true)}
            />
          </div>
          <div>
            <MdDelete
              className="cursor-pointer"
              onClick={handleDeleteTransaction}
            />
          </div>
        </div>
      </div>

      <div className="box-border">
        <Modal
          visible={showModal}
          onClose={handleOnClose}
          render={
            <TransactionsForm
              onClose={handleOnClose}
              transactionToEdit={data}
            />
          }
        />
      </div>
    </div>
  );
}

export default Operations;
