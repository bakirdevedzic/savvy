import Logo from "../../ui/Logo";

import Spinner from "../../ui/Spinner";
import { useForm } from "react-hook-form";
import supabase from "../../services/supabase";
import { useState } from "react";
import toast from "react-hot-toast";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      const email = data.email;
      setLoading(true);
      const { data: loginData, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
          emailRedirectTo: "http://localhost:5173/app",
        },
      });
      setLoading(false);
      if (loginData) {
        toast.success("Email sent!");
      } else if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    return data;
  };
  const onError = (errors) => {};

  return (
    <div className="flex flex-col justify-center px-6 py-12 max-w-[350px] us:overflow-auto bg-white rounded-lg shadow-lg">
      <div>
        <Logo />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form method="post" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="mt-10">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                required
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-blue p-2"
              />
              {errors.email && (
                <p className="text-red-500 font-bold font-almarai">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="mt-7 flex w-full justify-center rounded-md bg-primary-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue"
          >
            {loading === false && "Sign in"}
            {loading === true && <Spinner />}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
