import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { IoAddCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addTransactionAsync, editTransactionAsync } from "./transactionsSlice";
import Spinner from "../../ui/Spinner";
import ButtonConfirm from "../../ui/ButtonConfirm";
import { useState } from "react";
import { getIncomeCategories } from "../Categories/categoriesSlice";
import { getExpenseCategories } from "../Categories/categoriesSlice";

function TransactionsForm({ transactionToEdit = {}, onClose }) {
  const { id: editId, ...editValues } = transactionToEdit;
  const isEditSession = Boolean(editId);
  const [typeClicked, setTypeClicked] = useState();

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const incomeCategories = useSelector(getIncomeCategories);
  const expenseCategories = useSelector(getExpenseCategories);

  const dispatch = useDispatch();
  const status = useSelector((state) => state.transactions.status);

  const onSubmit = async (data) => {
    console.log(data);
    if (isEditSession) {
      await dispatch(editTransactionAsync({ ...data, id: editId }));
    } else {
      data = { ...data, date: new Date().toISOString() };
      await dispatch(addTransactionAsync(data));
    }

    if (status === "succeeded") {
      onClose();
      reset();
    }
  };

  return (
    <form
      className="max-w-[400px] overflow-y-auto"
      method="post"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-2xl font-semibold font-almarai">
        {isEditSession ? "Edit transaction" : "Add new transaction"}
      </p>

      <FormRow label="Name*" error={errors?.name?.message}>
        <input
          type="text"
          maxLength="30"
          placeholder="Name of transaction"
          className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
          {...register("name", { required: "Name is required!" })}
        />
      </FormRow>

      <FormRow label="Type*" error={errors?.type?.message}>
        <div className="flex flex-col">
          <div className="inline-flex items-center justify-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 w-[100%]">
            <input
              id="type-1"
              {...register("type", { required: "Type is required!" })}
              defaultChecked={transactionToEdit.type === "INCOME"} //
              type="radio"
              defaultValue="INCOME"
              onChange={(e) => {
                setTypeClicked(e.target.value);
              }}
              name="type"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="type-1"
              className="w-full py-4 ms-2 text-sm font-medium "
            >
              Income
            </label>
          </div>

          <div className="inline-flex items-center justify-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 w-[100%]">
            <input
              id="type-2"
              {...register("type", { required: "Type is required!" })}
              defaultChecked={transactionToEdit.type === "EXPENSE"} //
              type="radio"
              defaultValue="EXPENSE"
              onChange={(e) => {
                setTypeClicked(e.target.value);
              }}
              name="type"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="type-2"
              className="w-full py-4 ms-2 text-sm font-medium"
            >
              Expense
            </label>
          </div>
        </div>
      </FormRow>

      <FormRow label="Category*" error={errors?.category_id?.message}>
        <select
          className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
          {...register("category_id", { required: "Category is required!" })}
        >
          <option value="">Select category</option>
          {typeClicked === "INCOME" &&
            incomeCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          {typeClicked === "EXPENSE" &&
            expenseCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>
      </FormRow>

      <FormRow label="Amount*" error={errors?.amount?.message}>
        <input
          type="number"
          name="money"
          min="1"
          step="0.01"
          {...register("amount", {
            required: "Amount is required!",
            min: {
              value: 1,
              message: "Amount should be at least 1!",
            },
          })}
          placeholder="Amount of money"
          className="bg-slate-100 outline outline-1 outline-gray-400  focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
        />
      </FormRow>

      <FormRow label="Description">
        <textarea
          type="textarea"
          maxLength="50"
          {...register("description")}
          placeholder="Description of transaction"
          className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-24 w-72 p-2"
        />
      </FormRow>

      <ButtonConfirm status={status} />
    </form>
  );
}

export default TransactionsForm;
