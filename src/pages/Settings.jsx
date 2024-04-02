import { useForm } from "react-hook-form";
import FormRow from "../ui/FormRow";

function Settings() {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <div className="max-w-[1700px] w-[100%]">
      <div className="bg-white max-w-max p-4 rounded-lg shadow-lg">
        <form
          className="max-w-[400px] overflow-y-auto"
          method="post"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <p className="text-2xl font-semibold font-almarai">Settings</p>

          <FormRow label="Name" error={errors?.name?.message}>
            <input
              type="text"
              className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
              {...register("name")}
            />
          </FormRow>

          <FormRow label="Surname" error={errors?.surname?.message}>
            <input
              type="text"
              className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
              {...register("surname")}
            />
          </FormRow>

          <FormRow label="Email" error={errors?.email?.message}>
            <input
              type="email"
              className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
              {...register("email")}
            />
          </FormRow>

          <FormRow label="Country">
            <select
              id="Country"
              className="bg-slate-100 outline outline-1 outline-gray-400 focus:outline-blue-500 rounded-lg h-10 w-72 p-2"
            >
              <option value="Bosnia">Bosnia</option>
              <option value="Serbia">Serbia</option>
            </select>
          </FormRow>
        </form>
      </div>
    </div>
  );
}

export default Settings;
