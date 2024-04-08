import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBudgets } from "../../services/apiBudget";

export const fetchBudgetsAsync = createAsyncThunk(
  "transaction/fetchBudgets",
  async function () {
    const response = await fetchBudgets(); // API call to fetch budgets
    return response;
  }
);

// export const addBudgetAsync = createAsyncThunk(
//   "budgets/addBudget",
//   async (newBudget) => {
//     const response = await addBudget(newBudget); // API call to add a new budget
//     return response;
//   }
// );

// export const editBudgetAsync = createAsyncThunk(
//   "budgets/editBudget",
//   async (editedBudget) => {
//     const response = await editBudgetApi(editedBudget); // API call to edit a budget
//     return response;
//   }
// );
const initialState = {
  budgets: [],
  currentBudget: null,
  status: "idle",
  error: null,
};

const budgetsSlice = createSlice({
  name: "budgets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBudgetsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBudgetsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.budgets = action.payload;

        const today = new Date();

        const currentBudget = state.budgets.find((budget) => {
          const budgetDate = new Date(budget.month);
          return (
            budgetDate.getFullYear() === today.getFullYear() &&
            budgetDate.getMonth() === today.getMonth()
          );
        });
        if (currentBudget) {
          state.currentBudget = currentBudget.planned_amount;
        } else {
          state.currentBudget = null;
        }
      })
      .addCase(fetchBudgetsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    //   .addCase(addBudgetAsync.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(addBudgetAsync.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     state.budgets.push(action.payload);
    //   })
    //   .addCase(addBudgetAsync.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    //   })
    //   .addCase(editBudgetAsync.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(editBudgetAsync.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     const editedIndex = state.budgets.findIndex(
    //       (b) => b.id === action.payload.id
    //     );
    //     if (editedIndex !== -1) {
    //       state.budgets[editedIndex] = action.payload;
    //     }
    //   })
    //   .addCase(editBudgetAsync.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    //   });
  },
});

export const getBudgets = (state) => state.budgets.budgets;
export const getCurrentBudget = (state) => state.budgets.currentBudget;
export default budgetsSlice.reducer;
