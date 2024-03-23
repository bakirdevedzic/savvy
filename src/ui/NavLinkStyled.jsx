import { NavLink } from "react-router-dom";

function NavLinkStyled({ linkTo, text, icon }) {
  return (
    <li className="list-none flex items-center">
      <NavLink
        to={linkTo}
        className={
          "flex flex-row items-center w-full h-full text-primary-black hover:bg-primary-black hover:text-white rounded-xl py-2 transition-all duration-200"
        }
      >
        {icon}
        <span className="font-poppins font-medium">{text}</span>
      </NavLink>
    </li>
  );
}

export default NavLinkStyled;
