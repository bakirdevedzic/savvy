import LoginForm from "../features/Auth/LoginForm";
import Logo from "../ui/Logo";

function Login() {
  return (
    <div className="grid grid-cols-[1fr_1fr] min-h-screen max-w-[1700px] sm:flex sm:flex-col sm:gap-4 bg-primary-white-2">
      <div className="bg-primary-white-2 flex justify-center items-center sm:mt-20 sm:h-[50%]">
        <LoginForm />
      </div>
      <div className="flex justify-center items-center bg-white">
        Osnovne informacije o stranici
      </div>
    </div>
  );
}

export default Login;
