import { configureStore } from "@reduxjs/toolkit";
import transactionsSlice from "./features/Transactions/transactionsSlice";
import budgetSlice from "./features/Budget/budgetSlice";
import categoriesSlice from "./features/Categories/categoriesSlice";
import goalsSlice from "./features/Goals/goalsSlice";
import authSlice from "./features/Auth/authSlice";

const store = configureStore({
  reducer: {
    transactions: transactionsSlice,
    budgets: budgetSlice,
    categories: categoriesSlice,
    goals: goalsSlice,
    auth: authSlice,
  },
});

export default store;
