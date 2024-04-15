import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { IoAddCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addGoalAsync } from "./goalsSlice";
import Spinner from "../../ui/Spinner";
import ButtonConfirm from "../../ui/ButtonConfirm";

function GoalForm({ onClose }) {
  const { register, handleSubmit, formState, reset } = useForm();

  const { errors } = formState;

  const dispatch = useDispatch();
  const status = useSelector((state) => state.goals.status);

  const onSubmit = async (data) => {
    await dispatch(addGoalAsync(data));

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
      <p className="text-2xl font-semibold font-almarai">Add new goal</p>

      <FormRow label="Goal*" error={errors?.name?.message}>
        <input
          type="text"
          placeholder="Name of goal"
          className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
          {...register("name", { required: "Goal is required!" })}
        />
      </FormRow>

      <FormRow label="Amount*" error={errors?.goal_amount?.message}>
        <input
          type="number"
          name="money"
          {...register("goal_amount", {
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

export default GoalForm;
