import Logo from "../../ui/Logo";

function LoginForm() {
  return (
    <div className="flex flex-1 flex-col justify-center px-6 py-12 max-w-[350px] us:overflow-auto bg-white rounded-lg shadow-lg">
      {/*  */}
      <div className="">
        <Logo />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10">
        <form className="space-y-6" action="#" method="POST">
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
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-blue sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </form>
      </div>
      <div>
        {/*  */}
        <button
          type="submit"
          className="mt-7 flex w-full justify-center rounded-md bg-primary-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue"
        >
          Sign in
        </button>
        {/*  */}
      </div>
    </div>
  );
}

export default LoginForm;
