import { configureStore } from "@reduxjs/toolkit";
import transactionsSlice from "./features/Transactions/transactionsSlice";
import budgetSlice from "./features/Budget/budgetSlice";

const store = configureStore({
  reducer: {
    transactions: transactionsSlice,
    budgets: budgetSlice,
  },
});

export default store;
