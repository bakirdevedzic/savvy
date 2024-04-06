import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { IoAddCircle } from "react-icons/io5";

function GoalUpdateForm() {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form
      className="max-w-[400px] overflow-y-auto"
      method="post"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <p className="text-2xl font-semibold font-almarai">Update goal</p>

      <FormRow label="Add amount" error={errors?.amount?.message}>
        <input
          type="number"
          name="money"
          {...register("amount", {
            min: {
              value: 1,
              message: "Amount should be at least 1!",
            },
          })}
          placeholder="Add money to the goal"
          className="bg-slate-100 outline outline-1 outline-gray-400  focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
        />
      </FormRow>

      <p className="mt-12 outline outline-1 outline-gray-400 font-almarai font-semibold text-gray-700">
        Change goal property
      </p>
      <FormRow label="Goal" error={errors?.goal?.message}>
        <input
          type="text"
          placeholder="Name of goal"
          className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
          {...register("goal")}
        />
      </FormRow>

      <FormRow label="Amount" error={errors?.amount?.message}>
        <input
          type="number"
          name="money"
          {...register("amount", {
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
          <IoAddCircle />
          Submit
        </Button>
      </div>
    </form>
  );
}

export default GoalUpdateForm;
