import { NavLink } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/apiUser";
import { useMemo } from "react";

function ProfileCard() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    logout();
  };

  return (
    <div className="flex justify-center">
      <div className="w-[90%] bg-primary-black text-primary-white-2 grid grid-cols-3 grid-rows-2 h-32 rounded-xl p-2 shadow-md shadow-black">
        <div className="col-span-3 flex  justify-center font-bold pt-3">
          {user?.username?.length <= 20 &&
            user?.username !== "" &&
            user?.username !== null &&
            user?.username}
          {user?.username?.length > 20 && user?.username.slice(0, 20) + "..."}
          {(user?.username === null || user?.username === "") && "Savvy user"}
        </div>
        <div className="flex justify-center col-span-full ">
          <NavLink
            onClick={handleLogout}
            to="/login"
            className="col-span-full  bg-primary-blue h-[70%] w-[70%] mt-4 rounded-lg py-1 px-2 flex flex-row justify-center items-center font-poppins font-medium !important"
          >
            <IoLogOut />
            <span className="text-[16px] font-poppins font-bold">Log out</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
