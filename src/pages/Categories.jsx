import Button from "../ui/Button";
import { MdAddBox } from "react-icons/md";
import Modal from "../ui/Modal";
import { useState } from "react";
import IncomeCategoriesTable from "../features/Categories/IncomeCategoriesTable";
import ExpenseCategoriesTable from "../features/Categories/ExpenseCategoriesTable";
import CategoryForm from "../features/Categories/CategoryForm";
import { useSelector } from "react-redux";
import {
  getExpenseCategories,
  getIncomeCategories,
} from "../features/Categories/categoriesSlice";

function Categories() {
  const [showModal, setShowModal] = useState(false);

  const incomeCategories = useSelector(getIncomeCategories);
  const expenseCategories = useSelector(getExpenseCategories);

  const handleOnClose = () => {
    setShowModal(false);
  };
  return (
    <div className="max-w-[1700px] w-[100%] grid grid-rows-[auto_1fr_1fr] gap-4">
      <div className="sm:w-full sm:flex sm:justify-center">
        <Button type="base" onClick={() => setShowModal(true)}>
          <MdAddBox />
          Add new
        </Button>
      </div>

      <div className="overflow-auto">
        <h1 className="text-3xl font-bold ">Income</h1>
        <div className="text-sm text-gray-400 font-almarai font-semibold ">
          &apos;Transactions&apos; and &apos;Amount&apos; are calculated based
          on the transactions that occurred within the last 30 days.
        </div>
        <IncomeCategoriesTable categories={incomeCategories} />
      </div>

      <div className="overflow-auto">
        <h1 className="text-3xl font-bold ">Expense</h1>
        <div className="text-sm text-gray-400 font-almarai font-semibold ">
          &apos;Transactions&apos; and &apos;Amount&apos; are calculated based
          on the transactions that occurred within the last 30 days.
        </div>
        <ExpenseCategoriesTable categories={expenseCategories} />
      </div>

      <Modal
        visible={showModal}
        onClose={handleOnClose}
        render={<CategoryForm onClose={handleOnClose} />}
      />
    </div>
  );
}

export default Categories;
