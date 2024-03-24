import { TiThMenu } from "react-icons/ti";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Header({ setShowSidebar }) {
  return (
    <div className="min-h-[70px] bg-primary-white hidden md:block border-solid border-0 border-b-2 border-slate-200">
      <div className="grid grid-cols-[33%_33%_33%] items-center justify-between p-4">
        <button onClick={() => setShowSidebar(true)}>
          <TiThMenu className="w-8 h-8" />
        </button>
        <Link to="/app/dashboard">
          <Logo />
        </Link>
      </div>
    </div>
  );
}

export default Header;
