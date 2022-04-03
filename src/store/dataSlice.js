import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  books: [],
  booksByCategory: [],
  loaded: false,
  booksCategory: [],
  bookmarks: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dataLoaded(state, action) {
      state.loaded = action.payload;
    },
    getBooks(state, action) {
      state.books = action.payload;
    },
    getCategories(state, action) {
      state.categories = action.payload;
    },
    getBooksByCategories(state, action) {
      state.booksByCategory = action.payload;
    },
    booksCategory(state, action) {
      state.booksCategory = action.payload;
    },
  },
});

export const {
  getBooks,
  dataLoaded,
  getCategories,
  getBooksByCategories,
  booksCategory,
} = dataSlice.actions;

export default dataSlice.reducer;
