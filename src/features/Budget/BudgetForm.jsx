import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { IoAddCircle } from "react-icons/io5";

function BudgetForm() {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  const isMonthAvailable = (selectedMonth) => {
    const monthsArray = [
      "2024-06",
      "2022-02",
      "2022-03",
      "2022-04",
      "2022-05",
      "2022-06",
    ];
    return !monthsArray.includes(selectedMonth);
  };
  return (
    <form
      className="max-w-[400px] overflow-y-auto"
      method="post"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <p className="text-2xl font-semibold font-almarai">
        Plan a budget for a month!
      </p>

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

      <div className="flex justify-end mt-2">
        <Button type="base">
          <IoAddCircle />
          Submit
        </Button>
      </div>
    </form>
  );
}

export default BudgetForm;
