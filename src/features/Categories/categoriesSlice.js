import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "../../services/apiCategories";

// Async Thunks for Categories
export const fetchCategoriesAsync = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetchCategories(); // API call to fetch categories
    return response;
  }
);

// export const addCategoryAsync = createAsyncThunk(
//     'categories/addCategory',
//     async (newCategory, { rejectWithValue }) => {
//       try {
//         const response = await addCategory(newCategory); // API call to add a new category
//         return response;
//       } catch (error) {
//         return rejectWithValue(error.message);
//       }
//     }
//   );

//   export const editCategoryAsync = createAsyncThunk(
//     'categories/editCategory',
//     async (editedCategory, { rejectWithValue }) => {
//       try {
//         const response = await editCategoryApi(editedCategory); // API call to edit a category
//         return response;
//       } catch (error) {
//         return rejectWithValue(error.message);
//       }
//     }
//   );

const initialState = {
  incomeCategories: [],
  expenseCategories: [],
  status: "idle",
  error: null,
};

// Categories Slice
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.incomeCategories = action.payload.filter(
          (categorie) => categorie.type === "INCOME"
        );
        state.expenseCategories = action.payload.filter(
          (categorie) => categorie.type === "EXPENSE"
        );
        // state.categories = action.payload;
      })
      .addCase(fetchCategoriesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    //   .addCase(addCategoryAsync.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(addCategoryAsync.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     state.categories.push(action.payload);
    //   })
    //   .addCase(addCategoryAsync.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.payload;
    //   })
    //   .addCase(editCategoryAsync.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(editCategoryAsync.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     const editedIndex = state.categories.findIndex(
    //       (c) => c.id === action.payload.id
    //     );
    //     if (editedIndex !== -1) {
    //       state.categories[editedIndex] = action.payload;
    //     }
    //   })
    //   .addCase(editCategoryAsync.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.payload;
    //   });
  },
});

export const getIncomeCategories = (state) => state.categories.incomeCategories;
export const getExpenseCategories = (state) =>
  state.categories.expenseCategories;

export default categoriesSlice.reducer;
