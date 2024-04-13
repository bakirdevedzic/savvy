import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addGoal,
  deleteGoal,
  editGoal,
  fetchGoals,
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
    const response = await addGoal(newGoal); // API call to add a new goal
    return response;
  }
);

export const editGoalAsync = createAsyncThunk(
  "goals/editGoal",
  async (editedGoal) => {
    const response = await editGoal(editedGoal); // API call to edit a goal
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
        state.finishedGoals = action.payload.filter(
          (goal) => goal.active === false
        );
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
        state.goals.push(action.payload);
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
        const editedIndex = state.goals.findIndex(
          (g) => g.id === action.payload.id
        );
        if (editedIndex !== -1) {
          state.goals[editedIndex] = action.payload;
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
        state.goals = state.goals.filter((goal) => goal.id !== action.payload);
      })
      .addCase(deleteGoalAsync.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.error.message);
        state.error = action.error.message;
      });
  },
});

export const getActiveGoals = (state) => state.goals.activeGoals;
export const getFinishedGoals = (state) => state.goals.finishedGoals;

export default goalsSlice.reducer;
