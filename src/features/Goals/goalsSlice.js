import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addGoal,
  deleteGoal,
  editGoal,
  fetchGoals,
  updateSavedAmount,
} from "../../services/apiGoals";
import toast from "react-hot-toast";

// Async Thunks for Goals
export const fetchGoalsAsync = createAsyncThunk(
  "goals/fetchGoals",
  async () => {
    const response = await fetchGoals();
    return response;
  }
);

export const addGoalAsync = createAsyncThunk(
  "goals/addGoal",
  async (newGoal) => {
    const response = await addGoal(newGoal);
    return response;
  }
);

export const editGoalAsync = createAsyncThunk(
  "goals/editGoal",
  async (editedGoal) => {
    const response = await editGoal(editedGoal);
    return response;
  }
);

export const deleteGoalAsync = createAsyncThunk(
  "goals/deleteGoal",
  async (goalId) => {
    const response = await deleteGoal(goalId);
    return response;
  }
);

export const addAmountToGoalAsync = createAsyncThunk(
  "goals/addAmountToGoal",
  async ({ add_amount, id, saved_amount }) => {
    const response = await updateSavedAmount({ add_amount, id, saved_amount });
    return response;
  }
);

const initialState = {
  activeGoals: [],
  finishedGoals: [],
  status: "idle",
  error: null,
};

// Goals Slice
const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoalsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGoalsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.activeGoals = action.payload.filter(
          (goal) => goal.active === true
        );
        state.finishedGoals = action.payload
          .filter((goal) => goal.active === false)
          .sort((a, b) => {
            return b.finished_date.localeCompare(a.finished_date);
          });
      })
      .addCase(fetchGoalsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addGoalAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addGoalAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.activeGoals.push(action.payload);
        toast.success("Goal added successfully");
      })
      .addCase(addGoalAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(editGoalAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editGoalAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const editedIndex = state.activeGoals.findIndex(
          (g) => g.id === action.payload.id
        );

        if (editedIndex !== -1) {
          if (action.payload.active === false) {
            state.finishedGoals.unshift(state.activeGoals[editedIndex]);
            state.activeGoals.splice(editedIndex, 1);
          } else {
            state.activeGoals[editedIndex] = action.payload;
          }
        }
        toast.success("Goal edited successfully");
      })
      .addCase(editGoalAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteGoalAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteGoalAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        toast.success("Goal deleted successfully");
        state.finishedGoals = state.finishedGoals.filter(
          (goal) => goal.id !== action.payload
        );
      })
      .addCase(deleteGoalAsync.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.error.message);
        state.error = action.error.message;
      })
      .addCase(addAmountToGoalAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addAmountToGoalAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedGoal = action.payload;

        const updatedIndex = state.activeGoals.findIndex(
          (g) => g.id === updatedGoal.id
        );

        if (updatedIndex !== -1) {
          state.activeGoals[updatedIndex] = updatedGoal;
        }

        toast.success("Amount added to goal successfully");
      })
      .addCase(addAmountToGoalAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      });
  },
});

export const getActiveGoals = (state) => state.goals.activeGoals;
export const getFinishedGoals = (state) => state.goals.finishedGoals;

export default goalsSlice.reducer;
