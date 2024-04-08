import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTransactions } from "../../services/apiTransactions";

export const fetchTransactionsAsync = createAsyncThunk(
  "transaction/fetchTransactions",
  async function () {
    const response = await fetchTransactions(); // API call to fetch transactions
    return response;
  }
);

// export const addTransactionAsync = createAsyncThunk(
//   "transactions/addTransaction",
//   async (newTransaction) => {
//     const response = await addTransaction(newTransaction); // API call to add a new transaction
//     return response;
//   }
// );

// export const editTransactionAsync = createAsyncThunk(
//   "transactions/editTransaction",
//   async (editedTransaction) => {
//     const response = await editTransactionApi(editedTransaction); // API call to edit a transaction
//     return response;
//   }
// );

const initialState = {
  transactions: null,
  status: "idle",
  error: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTransactionsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.transactions = action.payload;
      })
      .addCase(fetchTransactionsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    //   .addCase(addTransactionAsync.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(addTransactionAsync.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     state.transactions.push(action.payload);
    //   })
    //   .addCase(addTransactionAsync.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    //   })
    //   .addCase(editTransactionAsync.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(editTransactionAsync.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     const editedIndex = state.transactions.findIndex(
    //       (t) => t.id === action.payload.id
    //     );
    //     if (editedIndex !== -1) {
    //       state.transactions[editedIndex] = action.payload;
    //     }
    //   })
    //   .addCase(editTransactionAsync.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    //   });
  },
});

export default transactionsSlice.reducer;

export const getTransactions = (state) => state.transactions.transactions;
