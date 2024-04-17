import TransactionsTable from "../features/Transactions/TransactionsTable";
import TransactionsFilters from "../features/Transactions/TransactionsFilters";
import Button from "../ui/Button";
import { MdAddBox } from "react-icons/md";
import Modal from "../ui/Modal";

import TransactionsForm from "../features/Transactions/TransactionsForm";
import { useSelector } from "react-redux";
import { getTransactions } from "../features/Transactions/transactionsSlice";
import { useState } from "react";

function Transactions() {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("All");

  console.log("filter", filter);
  const transactions = useSelector(getTransactions);

  const filteredTransactions = transactions?.filter((transaction) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Incomes") {
      return transaction.type === "INCOME";
    } else if (filter === "Expenses") {
      return transaction.type === "EXPENSE";
    }
  });

  const handleOnClose = () => {
    setShowModal(false);
  };
  return (
    <main className="grid grid-rows-[auto_1fr] mt-10 max-w-[1700px] w-[100%]">
      <div
        className="p-2 flex items-center align-middle justify-between bg-white gap-3 overflow-hidden rounded-md shadow
      sm:grid sm:grid-rows-2 sm:gap-3 sm:w-[100%] sm:justify-center"
      >
        <div className="sm:w-full sm:flex sm:justify-center">
          <Button type="base" onClick={() => setShowModal(true)}>
            <MdAddBox />
            Add new
          </Button>
        </div>
        <TransactionsFilters filter={filter} setFilter={setFilter} />
      </div>
      <TransactionsTable transactions={filteredTransactions} />
      <Modal
        visible={showModal}
        onClose={handleOnClose}
        render={<TransactionsForm onClose={handleOnClose} />}
      />
    </main>
  );
}

export default Transactions;
