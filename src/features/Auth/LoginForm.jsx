import Logo from "../../ui/Logo";

import Spinner from "../../ui/Spinner";
import { useForm } from "react-hook-form";
import supabase from "../../services/supabase";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { fetchUserAsync, setDemoAccount } from "../User/userSlice";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  function manuallySetSession() {
    try {
      dispatch(fetchUserAsync("0b5b6976-3fcd-4e54-ac94-001a6682168b"));
      dispatch(setDemoAccount());
      navigate("/app");
    } catch (error) {
      console.error("Manual session set error:", error.message);
    }
  }

  return (
    <div className="flex flex-col justify-center px-6 py-12 max-w-[350px] us:overflow-auto bg-white rounded-lg shadow-lg">
      <div>
        <Logo />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <p className="text-gray-500 text-center">
          Enter your email, and we&apos;ll send a link to your inbox.
        </p>
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
      <div className="flex flex-col justify-center items-center mt-3 w-[100%]">
        <p className="text-gray-500 mb-2">
          or give it a try without logging in
        </p>
        <Button type="small" onClick={() => manuallySetSession()}>
          Demo account
        </Button>
      </div>
    </div>
  );
}

export default LoginForm;
