import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { changeBalance, editUser, fetchUser } from "../../services/apiUser";
import toast from "react-hot-toast";

export const fetchUserAsync = createAsyncThunk("user/fetchUser", async (id) => {
  const response = await fetchUser(id);
  return response;
});

export const editUserAsync = createAsyncThunk(
  "user/editUser",
  async (editedUser) => {
    const response = await editUser(editedUser);
    return response;
  }
);

export const changeBalanceAsync = createAsyncThunk(
  "user/changeBalance",
  async ({ amount, userId }) => {
    const response = await changeBalance({ amount, userId });
    return response;
  }
);

const initialState = {
  user: null,
  status: "idle",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserIsNotLogged: (state) => {
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;

        state.status = "succeeded";
      })
      .addCase(fetchUserAsync.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.error.message);
      })
      .addCase(editUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editUserAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
        toast.success("User edited successfully");
      })
      .addCase(editUserAsync.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.error.message);
      })
      .addCase(changeBalanceAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(changeBalanceAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        toast.success("Balance changed successfully");
      })
      .addCase(changeBalanceAsync.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.error.message);
      });
  },
});

export const { setUserIsNotLogged } = userSlice.actions;
export default userSlice.reducer;
