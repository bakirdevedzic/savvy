import { useForm } from "react-hook-form";
import FormRow from "../ui/FormRow";
import { useDispatch, useSelector } from "react-redux";

import ButtonConfirm from "../ui/ButtonConfirm";
import { editUserAsync } from "../features/User/userSlice";

function Settings() {
  const user = useSelector((state) => state.user.user);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: { ...user },
  });
  const status = useSelector((state) => state.user.status);

  const { errors } = formState;
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    await dispatch(editUserAsync(data));
  };

  function onError(errors) {}
  return (
    <div className="max-w-[1700px] w-[100%]">
      <div className="bg-white max-w-max p-4 rounded-lg shadow-lg">
        <form
          className="max-w-[400px] overflow-y-auto"
          method="post"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <p className="text-2xl font-semibold font-almarai">Settings</p>

          <FormRow label="Username" error={errors?.username?.message}>
            <input
              type="text"
              disabled={status === "loading"}
              className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
              {...register("username")}
            />
          </FormRow>

          <FormRow label="Email" error={errors?.email?.message}>
            <input
              type="email"
              disabled={true}
              className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2 text-gray-500 cursor-not-allowed"
              {...register("email")}
            />
          </FormRow>
          <ButtonConfirm status={status} />
        </form>
      </div>
    </div>
  );
}

export default Settings;
