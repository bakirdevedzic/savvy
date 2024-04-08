import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGoals } from "../../services/apiGoals";

// Async Thunks for Goals
export const fetchGoalsAsync = createAsyncThunk(
  "goals/fetchGoals",
  async () => {
    const response = await fetchGoals();
    return response;
  }
);

// export const addGoalAsync = createAsyncThunk(
//   'goals/addGoal',
//   async (newGoal, { rejectWithValue }) => {
//     try {
//       const response = await addGoal(newGoal); // API call to add a new goal
//       return response;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const editGoalAsync = createAsyncThunk(
//   'goals/editGoal',
//   async (editedGoal, { rejectWithValue }) => {
//     try {
//       const response = await editGoalApi(editedGoal); // API call to edit a goal
//       return response;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

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
      });
    //   .addCase(addGoalAsync.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(addGoalAsync.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     state.goals.push(action.payload);
    //   })
    //   .addCase(addGoalAsync.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.payload;
    //   })
    //   .addCase(editGoalAsync.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(editGoalAsync.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     const editedIndex = state.goals.findIndex(
    //       (g) => g.id === action.payload.id
    //     );
    //     if (editedIndex !== -1) {
    //       state.goals[editedIndex] = action.payload;
    //     }
    //   })
    //   .addCase(editGoalAsync.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.payload;
    //   });
  },
});

export const getActiveGoals = (state) => state.goals.activeGoals;
export const getFinishedGoals = (state) => state.goals.finishedGoals;

export default goalsSlice.reducer;
