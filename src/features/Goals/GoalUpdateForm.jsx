import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { IoAddCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addAmountToGoalAsync, editGoalAsync } from "./goalsSlice";
import Spinner from "../../ui/Spinner";

function GoalUpdateForm({ goalToEdit = {}, onClose }) {
  const { id: editId, ...editValues } = goalToEdit;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { ...editValues, add_amount: 0 },
  });

  const dispatch = useDispatch();
  const status = useSelector((state) => state.goals.status);
  const user_id = useSelector((state) => state.user.user.id);
  const onSubmit = async (data) => {
    data = { ...data, user_id };
    const add_amount = Number(data.add_amount);
    delete data.add_amount;

    data = { ...data, goal_amount: Number(data.goal_amount) };

    const isDataChanged = JSON.stringify(data) !== JSON.stringify(editValues);

    if (add_amount > 0 && isDataChanged) {
      await dispatch(editGoalAsync({ ...data, id: editId }));
      await dispatch(
        addAmountToGoalAsync({
          add_amount,
          id: editId,
          saved_amount: editValues.saved_amount,
        })
      );
    } else if (add_amount > 0 && !isDataChanged) {
      await dispatch(
        addAmountToGoalAsync({
          add_amount,
          id: editId,
          saved_amount: editValues.saved_amount,
        })
      );
    } else if (add_amount <= 0 && isDataChanged) {
      await dispatch(editGoalAsync({ ...data, id: editId }));
    } else if (add_amount <= 0 && !isDataChanged) {
      onClose();
      reset();
    }

    if (status === "succeeded") {
      onClose();
      reset();
    }
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[400px] overflow-y-auto"
    >
      <p className="text-2xl font-semibold font-almarai">Update goal</p>

      <FormRow label="Add amount" error={errors?.add_amount?.message}>
        <input
          type="number"
          name="money"
          {...register("add_amount", {
            min: {
              value: 0,
              message: "Amount can't be negative!",
            },
          })}
          placeholder="Add money to the goal"
          className="bg-slate-100 outline outline-1 outline-gray-400  focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
        />
      </FormRow>

      <p className="mt-12 outline outline-1 outline-gray-400 font-almarai font-semibold text-gray-700">
        Change goal property
      </p>
      <FormRow label="Goal" error={errors?.name?.message}>
        <input
          type="text"
          maxLength="50"
          placeholder="Name of goal"
          className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
          {...register("name")}
        />
      </FormRow>

      <FormRow label="Amount" error={errors?.goal_amount?.message}>
        <input
          type="number"
          name="money"
          {...register("goal_amount", {
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

export default GoalUpdateForm;
