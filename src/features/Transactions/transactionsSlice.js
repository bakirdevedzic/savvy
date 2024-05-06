import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  fetchTransactions,
} from "../../services/apiTransactions";
import toast from "react-hot-toast";

export const fetchTransactionsAsync = createAsyncThunk(
  "transaction/fetchTransactions",
  async function (userId) {
    const response = await fetchTransactions(userId);
    return response;
  }
);

export const addTransactionAsync = createAsyncThunk(
  "transactions/addTransaction",
  async (newTransaction) => {
    const response = await addTransaction(newTransaction);
    return response;
  }
);

export const deleteTransactionAsync = createAsyncThunk(
  "transactions/deleteTransaction",
  async (transactionId) => {
    const response = await deleteTransaction(transactionId);
    return response;
  }
);

export const editTransactionAsync = createAsyncThunk(
  "transactions/editTransaction",
  async (editedTransaction) => {
    const response = await editTransaction(editedTransaction);
    return response;
  }
);

const initialState = {
  transactions: null,
  status: "idle",
  error: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    updateCategoryName(state, action) {
      const { id: transactionId, name: newCategoryName } = action.payload;
      state.transactions = state.transactions?.map((transaction) => {
        if (transaction.category_id === transactionId) {
          return {
            ...transaction,
            categories: { ...transaction.categories, name: newCategoryName },
          };
        }
        return transaction;
      });
    },
    deleteCategoryFromTransactions(state, action) {
      const deletedCategoryId = action.payload;
      state.transactions = state.transactions?.map((transaction) => {
        if (transaction.category_id === deletedCategoryId) {
          return {
            ...transaction,
            category_id: null,
            categories: undefined,
          };
        }
        return transaction;
      });
    },
  },
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
      })
      .addCase(addTransactionAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTransactionAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        toast.success("Transaction added successfully");
        state.transactions.unshift(action.payload[0]);
      })
      .addCase(addTransactionAsync.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.error.message);
        state.error = action.error.message;
      })
      .addCase(deleteTransactionAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTransactionAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        toast.success("Transaction deleted successfully");
        state.transactions = state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        );
      })
      .addCase(deleteTransactionAsync.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.error.message);
        state.error = action.error.message;
      })
      .addCase(editTransactionAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editTransactionAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        toast.success("Transaction edited successfully");

        const editedIndex = state.transactions.findIndex(
          (t) => t.id === action.payload.id
        );
        if (editedIndex !== -1) {
          state.transactions[editedIndex] = action.payload;
        }
      })
      .addCase(editTransactionAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default transactionsSlice.reducer;
export const { updateCategoryName, deleteCategoryFromTransactions } =
  transactionsSlice.actions;

export const getTransactions = (state) => state.transactions.transactions;
