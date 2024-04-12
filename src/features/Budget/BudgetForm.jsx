import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { IoAddCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addBudgetAsync, editBudgetAsync, getBudgets } from "./budgetSlice";
import Spinner from "../../ui/Spinner";
import { formatMonth, transformMonth } from "../../utils/helpers";
import { checkIfMonthIsUnique } from "../../utils/budgetHelpers";

function BudgetForm({ budgetToEdit = {}, onClose }) {
  const { id: editId, ...editValues } = budgetToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const dispatch = useDispatch();
  const status = useSelector((state) => state.budgets.status);
  const budgets = useSelector(getBudgets);

  const onSubmit = async (data) => {
    if (!isEditSession) {
      await dispatch(
        addBudgetAsync({ ...data, month: transformMonth(data.month) })
      );
    } else {
      await dispatch(editBudgetAsync({ ...data, id: editId }));
    }
    if (status === "succeeded") {
      onClose();
      reset();
    }
  };

  const isMonthAvailable = (selectedMonth) => {
    return !checkIfMonthIsUnique(budgets, selectedMonth);
  };
  return (
    <form
      className="max-w-[400px] overflow-y-auto"
      method="post"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-2xl font-semibold font-almarai">
        {isEditSession
          ? `Edit budget for ${formatMonth(budgetToEdit.month)}`
          : "Plan a budget for a month!"}
      </p>

      {!isEditSession && (
        <FormRow label="Month*" error={errors?.month?.message}>
          <input
            type="month"
            {...register("month", {
              required: "Month is required!",
              validate: (value) =>
                isMonthAvailable(value) || "Month is already in use!",
            })}
            placeholder="Choose month"
            className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
          />
        </FormRow>
      )}

      <FormRow label="Amount*" error={errors?.planned_amount?.message}>
        <input
          type="number"
          name="money"
          {...register("planned_amount", {
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

      <div className="flex justify-end mt-2">
        <Button type="base">
          {status === "loading" ? (
            <Spinner />
          ) : (
            <div className="flex flex-row items-center">
              <IoAddCircle />
              Submit
            </div>
          )}
        </Button>
      </div>
    </form>
  );
}

export default BudgetForm;
