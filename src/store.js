import { configureStore } from "@reduxjs/toolkit";
import transactionsSlice from "./features/Transactions/transactionsSlice";
import budgetSlice from "./features/Budget/budgetSlice";
import categoriesSlice from "./features/Categories/categoriesSlice";
import goalsSlice from "./features/Goals/goalsSlice";

const store = configureStore({
  reducer: {
    transactions: transactionsSlice,
    budgets: budgetSlice,
    categories: categoriesSlice,
    goals: goalsSlice,
  },
});

export default store;
