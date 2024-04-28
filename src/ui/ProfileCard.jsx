import { NavLink } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";

import { useDispatch } from "react-redux";
import { logout } from "../services/apiUser";

function ProfileCard() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    logout();
  };
  return (
    <div className="flex justify-center">
      <div className="w-[90%] bg-primary-black text-primary-white-2 grid grid-cols-3 grid-rows-2 h-32 rounded-xl p-2 shadow-md shadow-black">
        <img
          src="https://images.generated.photos/9SZtEZxEsBJQH5-PZzAobHBMpMmuD5SYcByUjjuICf0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTA4MTkwLmpwZw.jpg"
          className="rounded-full object-cover row-[1/2] w-[80%] ml-4"
          alt="photo of a person"
        />
        <div className="col-span-2 col-start-2 flex flex-col justify-center ml-4">
          <span className="font-poppins font-bold text-[16px]">Alexandar</span>
          <span className="font-poppins font-bold text-[16px]">Smith</span>
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
