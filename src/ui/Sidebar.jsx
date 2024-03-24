import Logo from "./Logo";
import NavLinkStyled from "./NavLinkStyled";
import NavListGroup from "./NavListGroup";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaSackDollar } from "react-icons/fa6";

import { FaHeart } from "react-icons/fa";
import { FaRectangleList } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaChartPie } from "react-icons/fa";
import ProfileCard from "./ProfileCard";
import ModalOverlaySideBar from "./ModalOverlaySidebar";

function Sidebar({
  showSidebar,
  isSmallOrEqual1025,
  isLargerThan1025,
  setShowSidebar,
}) {
  let className = "";
  if (isLargerThan1025 || (isSmallOrEqual1025 && showSidebar))
    className =
      "h-full bg-white row-span-full col-[1/2] px-[1.5rem] py-[1.5rem] flex flex-col border-solid border-0 border-r border-slate-200  fixed top-0 left-0 z-10 w-[18rem] overflow-y-auto transition-[margin-left] ease-in-out duration-500";
  if (isSmallOrEqual1025 && !showSidebar)
    className = className =
      "h-full bg-white row-span-full col-[1/2] px-[1.5rem] py-[1.5rem] flex flex-col border-solid border-0 border-r border-slate-200  fixed top-0 left-0 z-10 w-[18rem] overflow-y-auto ml-[-18rem] transition-[margin-left] ease-in-out duration-500";
  return (
    <>
      <aside className={className}>
        <Logo />
        <nav>
          <NavListGroup>
            <NavLinkStyled
              linkTo="/app/dashboard"
              text="Dashboard"
              icon={<MdDashboard className="w-20 h-6 object-cover" />}
            />
          </NavListGroup>
          <NavListGroup>
            <span className="font-poppins font-medium text-primary-black text-[16px]">
              Financial Management
            </span>
            <NavLinkStyled
              linkTo="/app/transactions"
              text="Transactions"
              icon={<GrTransaction className="w-20 h-6 object-cover" />}
            />
            <NavLinkStyled
              linkTo="/app/budget"
              text="Budget"
              icon={<FaSackDollar className="w-20 h-6 object-cover" />}
            />
            <NavLinkStyled
              linkTo="/app/categories"
              text="Categories"
              icon={<FaRectangleList className="w-20 h-6 object-cover" />}
            />
          </NavListGroup>
          <NavListGroup>
            <span className="font-poppins font-medium text-primary-black text-[16px]">
              Planning and Analysis
            </span>
            <NavLinkStyled
              linkTo="/app/goals"
              text="Goals"
              icon={<FaHeart className="w-20 h-6 object-cover" />}
            />
            <NavLinkStyled
              linkTo="/app/statistics"
              text="Statistics"
              icon={<FaChartPie className="w-20 h-6 object-cover" />}
            />
          </NavListGroup>
          <NavListGroup>
            <span className="font-poppins font-medium text-primary-black text-[16px]">
              Configuration and Tools
            </span>
            <NavLinkStyled
              linkTo="/app/settings"
              text="Settings"
              icon={<IoMdSettings className="w-20 h-6 object-cover" />}
            />
          </NavListGroup>

          <ProfileCard />
        </nav>
      </aside>
      {isSmallOrEqual1025 && showSidebar && (
        <ModalOverlaySideBar setShowSidebar={setShowSidebar} />
      )}
    </>
  );
}

export default Sidebar;
