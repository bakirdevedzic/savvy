import LoginForm from "../features/Auth/LoginForm";

import { IoIosCheckmarkCircle } from "react-icons/io";

function Login() {
  return (
    <div className="flex flex-row h-[calc(100dvh)] sm:grid sm:grid-rows-[1fr_1fr] sm:pt-10 sm:gap-4  w-full justify-center overflow-auto bg-cover bg-center bg-primary-white-2">
      <div className=" flex justify-center items-center mt-20 w-[100%] sm:items-end basis-[50%]">
        <LoginForm />
      </div>
      <div className=" flex justify-center items-center p-10 basis-[50%] bg-white">
        <div className="grid grid-rows-[max-content] w-[100%] items-center gap-6">
          <OneRow
            title="Effortless budget tracking"
            text="Easily manage your finances with intuitive transaction tracking and insightful budget analysis."
          />
          <OneRow
            title="Plan smarter with budget forecasting"
            text="Anticipate future expenses and plan budgets accordingly to stay financially prepared month after month."
          />
          <OneRow
            title="See your progress visually"
            text="Get clear insights with intuitive charts and graphs."
          />
        </div>
      </div>
    </div>
  );
}

function OneRow({ title, text }) {
  return (
    <div className="flex flex-col w-[auto] ml-10">
      <div className="flex flex-row  text-2xl gap-3 items-center align-center font-bold">
        <IoIosCheckmarkCircle className="text-2xl text-primary-blue" />
        <p>{title}</p>
      </div>
      <div className="ml-9">
        <p className="font-poppins text-gray-600 font-light">{text}</p>
      </div>
    </div>
  );
}

export default Login;
