import { configureStore } from "@reduxjs/toolkit";
import transactionsSlice from "./features/Transactions/transactionsSlice";

const store = configureStore({
  reducer: {
    transactions: transactionsSlice,
  },
});

export default store;
