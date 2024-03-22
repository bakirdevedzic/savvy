import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";

function AppLayout() {
  return (
    <div className="grid grid-cols-[20rem,1fr] grid-rows-[60px,1fr] h-screen">
      <Header />
      <Sidebar />
      <main className="bg-primary-white-2 col-[2/3] row-[2/3] pt-[4rem] pl-[4.8rem] pr-[4.8rem] pb-[6.4rem]">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
