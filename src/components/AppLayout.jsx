import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function AppLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  const isSmallOrEqual1025 = useMediaQuery({ maxWidth: 1025 });
  const isLargerThan1025 = useMediaQuery({ minWidth: 1026 });

  return (
    <div className="grid grid-cols-[18rem,1fr] h-screen md:flex sm:flex md:flex-col sm:flex-col">
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar
        showSidebar={showSidebar}
        isSmallOrEqual1025={isSmallOrEqual1025}
        isLargerThan1025={isLargerThan1025}
        setShowSidebar={setShowSidebar}
      />
      <main className="bg-primary-white-2 col-[2/3]  pt-[2.4rem] pl-[4.8rem] pr-[4.8rem] pb-[6.4rem] sm:pt-[1.6rem] sm:pl-[2.4rem] sm:pr-[2.4rem] md:pt-[1.6rem] md:pl-[2.4rem] md:pr-[2.4rem] flex flex-col items-center">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
