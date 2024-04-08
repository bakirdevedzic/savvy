import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { IoAddCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addTransactionAsync } from "./transactionsSlice";

function TransactionsForm({ onClose }) {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  const dispatch = useDispatch();
  const status = useSelector((state) => state.transactions.status);
  function onSubmit(data) {
    console.log(status);
    dispatch(addTransactionAsync(data));
    onClose();
  }

  function onError(errors) {}

  return (
    <form
      className="max-w-[400px] overflow-y-auto"
      method="post"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <p className="text-2xl font-semibold font-almarai">Add new transaction</p>

      <FormRow label="Name*" error={errors?.name?.message}>
        <input
          type="text"
          placeholder="Name of transaction"
          className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
          {...register("name", { required: "Name is required!" })}
        />
      </FormRow>

      <FormRow label="Type*">
        <div className="inline-flex items-center justify-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 w-[100%]">
          <input
            id="type-1"
            {...register("type", { required: "Type is required!" })}
            checked
            type="radio"
            defaultValue="INCOME"
            name="type"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="w-full py-4 ms-2 text-sm font-medium ">
            Income
          </label>
        </div>

        <div className="inline-flex items-center justify-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 w-[100%]">
          <input
            checked
            id="type-2"
            {...register("type", { required: "Type is required!" })}
            type="radio"
            defaultValue="EXPENSE"
            name="type"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="w-full py-4 ms-2 text-sm font-medium">
            Expense
          </label>
        </div>
      </FormRow>

      <FormRow label="Amount*" error={errors?.amount?.message}>
        <input
          type="number"
          name="money"
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
          {...register("description")}
          placeholder="Description of transaction"
          className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-24 w-72 p-2"
        />
      </FormRow>

      <FormRow label="Date*" error={errors?.date?.message}>
        <input
          type="date"
          {...register("date", { required: "Date is required!" })}
          placeholder="Date of transaction"
          className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
        />
      </FormRow>

      <div className="flex justify-end mt-2">
        <Button type="base">
          <IoAddCircle />
          Submit
        </Button>
      </div>
    </form>
  );
}

export default TransactionsForm;
