import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTransactionsAsync,
  getTransactions,
} from "../features/Transactions/transactionsSlice";
import { fetchBudgetsAsync } from "../features/Budget/budgetSlice";
import { fetchCategoriesAsync } from "../features/Categories/categoriesSlice";
import { fetchGoalsAsync } from "../features/Goals/goalsSlice";
import Spinner from "../ui/Spinner";

function AppLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  const isSmallOrEqual1025 = useMediaQuery({ maxWidth: 1025 });
  const isLargerThan1025 = useMediaQuery({ minWidth: 1026 });

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.user.status);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setLoading(true);

      await dispatch(fetchTransactionsAsync(user.id));
      await dispatch(fetchBudgetsAsync(user.id));
      await dispatch(fetchCategoriesAsync(user.id));
      await dispatch(fetchGoalsAsync(user.id));
      setLoading(false);
    }

    if (user && user.id) getData();
  }, [user]);
  if (status === "loading" && !user) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[18rem,1fr] h-[calc(100dvh)] md:flex sm:flex md:flex-col sm:flex-col">
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar
        showSidebar={showSidebar}
        isSmallOrEqual1025={isSmallOrEqual1025}
        isLargerThan1025={isLargerThan1025}
        setShowSidebar={setShowSidebar}
      />
      <main className="bg-primary-white-2 col-[2/3]  pt-[2.4rem] pl-[4.8rem] pr-[4.8rem] pb-[6.4rem] sm:pt-[1.6rem] sm:pl-[2.4rem] sm:pr-[2.4rem] md:pt-[1.6rem] md:pl-[2.4rem] md:pr-[2.4rem] flex flex-col items-center">
        {!loading && user ? <Outlet /> : <Spinner />}
      </main>
    </div>
  );
}

export default AppLayout;
