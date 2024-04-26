import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../services/supabase";
import toast from "react-hot-toast";

export const loginWithMagicLink = createAsyncThunk(
  "auth/loginWithMagicLink",
  async (email) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
        // emailRedirectTo: window.location.origin,
      },
    });

    if (error) {
      throw error;
    }

    return data;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }

  return null;
});

const initialState = {
  user: null,
  isLoggedIn: false,
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginWithMagicLink.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithMagicLink.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
        toast.success("Login Successful!");
      })
      .addCase(loginWithMagicLink.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error("Login Failed!");
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isLoggedIn = false;
        toast.success("Logged Out!");
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error("Logout Failed!");
      });
  },
});

export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getUser = (state) => state.auth.user;
export const getAuthError = (state) => state.auth.error;
export const getAuthLoading = (state) => state.auth.loading;

export default authSlice.reducer;
