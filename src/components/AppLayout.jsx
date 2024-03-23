import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-cols-[20rem,1fr] h-screen">
      <Sidebar />
      <main className="bg-primary-white-2 col-[2/3]  pt-[2.4rem] pl-[4.8rem] pr-[4.8rem] pb-[6.4rem]">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
