import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addCategoryAsync, editCategoryAsync } from "./categoriesSlice";

import ButtonConfirm from "../../ui/ButtonConfirm";
import { updateCategoryName } from "../Transactions/transactionsSlice";

function CategoryForm({ onClose, categoryToEdit = {} }) {
  const { id: editId, ...editValues } = categoryToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  const user_id = useSelector((state) => state.user.user.id);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);

  const onSubmit = async (data) => {
    data = { ...data, user_id: user_id };

    if (isEditSession) {
      await dispatch(editCategoryAsync({ ...data, id: editId }));
      dispatch(updateCategoryName({ id: editId, name: data.name }));
    } else {
      await dispatch(addCategoryAsync(data));
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
        {isEditSession ? "Edit category" : "Create new category"}
      </p>

      <FormRow label="Name*" error={errors?.name?.message}>
        <input
          type="text"
          maxLength="25"
          placeholder="Name of category"
          className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
          {...register("name", { required: "Name of category is required!" })}
        />
      </FormRow>
      {!isEditSession && (
        <FormRow label="Type*" error={errors?.type?.message}>
          <div className="flex flex-col">
            <div className="inline-flex items-center justify-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 w-[100%]">
              <input
                id="type-1"
                {...register("type", { required: "Type is required!" })}
                type="radio"
                defaultValue="INCOME"
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
                type="radio"
                defaultValue="EXPENSE"
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
      )}

      <ButtonConfirm status={status} />
    </form>
  );
}

export default CategoryForm;
