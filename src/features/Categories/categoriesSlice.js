import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addCategory,
  deleteCateogry,
  editCategory,
  fetchCategories,
} from "../../services/apiCategories";
import toast from "react-hot-toast";

// Async Thunks for Categories
export const fetchCategoriesAsync = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetchCategories(); // API call to fetch categories
    return response;
  }
);

export const addCategoryAsync = createAsyncThunk(
  "categories/addCategory",
  async (newCategory) => {
    const response = await addCategory(newCategory); // API call to add a new category
    return response;
  }
);

export const editCategoryAsync = createAsyncThunk(
  "categories/editCategory",
  async (editedCategory) => {
    const response = await editCategory(editedCategory); // API call to edit a category
    return response;
  }
);

export const deleteCategoryAsync = createAsyncThunk(
  "categories/deleteCategory",
  async (categoryId) => {
    const response = await deleteCateogry(categoryId);
    return response;
  }
);

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
        action.payload.forEach((category) => {
          category.transactions = 0;
          category.amount = 0;
        });
        state.incomeCategories = action.payload.filter(
          (categorie) => categorie.type === "INCOME"
        );
        state.expenseCategories = action.payload.filter(
          (categorie) => categorie.type === "EXPENSE"
        );
      })
      .addCase(fetchCategoriesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addCategoryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCategoryAsync.fulfilled, (state, action) => {
        state.status = "succeeded";

        if (action.payload.type === "INCOME") {
          state.incomeCategories.unshift(action.payload);
        } else if (action.payload.type === "EXPENSE") {
          state.expenseCategories.unshift(action.payload);
        }
        toast.success("Category added successfully");
      })
      .addCase(addCategoryAsync.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.error.message);
        state.error = action.error.message;
      })
      .addCase(editCategoryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editCategoryAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const editedCategory = action.payload;
        const editedIndexIncome = state.incomeCategories.findIndex(
          (c) => c.id === editedCategory.id
        );
        const editedIndexExpense = state.expenseCategories.findIndex(
          (c) => c.id === editedCategory.id
        );
        if (editedIndexIncome !== -1) {
          state.incomeCategories[editedIndexIncome] = editedCategory;
        } else if (editedIndexExpense !== -1) {
          state.expenseCategories[editedIndexExpense] = editedCategory;
        }
        toast.success("Category edited successfully");
      })
      .addCase(editCategoryAsync.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.error.message);
        state.error = action.error.message;
      })
      .addCase(deleteCategoryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCategoryAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const deletedCategoryId = action.payload;
        toast.success("Category deleted successfully");

        // Remove the deleted category from the income categories array
        state.incomeCategories = state.incomeCategories.filter(
          (category) => category.id !== deletedCategoryId
        );

        // Remove the deleted category from the expense categories array
        state.expenseCategories = state.expenseCategories.filter(
          (category) => category.id !== deletedCategoryId
        );
      })
      .addCase(deleteCategoryAsync.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.error.message);
        state.error = action.error.message;
      });
  },
});

export const { calculateCategoriesStats } = categoriesSlice.actions;

export const getIncomeCategories = (state) => state.categories.incomeCategories;
export const getExpenseCategories = (state) =>
  state.categories.expenseCategories;

export default categoriesSlice.reducer;
