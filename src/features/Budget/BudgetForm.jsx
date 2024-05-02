import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";

import { useDispatch, useSelector } from "react-redux";
import { addBudgetAsync, editBudgetAsync, getBudgets } from "./budgetSlice";

import { formatMonth, transformMonth } from "../../utils/helpers";
import { checkIfMonthIsUnique } from "../../utils/budgetHelpers";
import ButtonConfirm from "../../ui/ButtonConfirm";

function BudgetForm({ budgetToEdit = {}, onClose }) {
  const { id: editId, ...editValues } = budgetToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  const curMonth = `${new Date().getFullYear()}-0${new Date().getMonth() + 1}`;
  const user_id = useSelector((state) => state.user.user.id);

  const dispatch = useDispatch();
  const status = useSelector((state) => state.budgets.status);
  const budgets = useSelector(getBudgets);
  const currentBudget = useSelector((state) => state.budgets.currentBudget);
  const newCurrentBudget = currentBudget
    ? currentBudget
    : { month: "", planned_amount: 0 };

  const onSubmit = async (data) => {
    data = { ...data, user_id };

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
    return !checkIfMonthIsUnique([...budgets, newCurrentBudget], selectedMonth);
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
            min={curMonth}
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
          step="0.01"
          min="1"
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

      <ButtonConfirm status={status} />
    </form>
  );
}

export default BudgetForm;
