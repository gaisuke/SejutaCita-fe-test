import {
  booksCategory,
  dataLoaded,
  getBooks,
  getBooksByCategories,
  getCategories,
} from "./dataSlice";

export const getAllBooks = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "/fee-assessment-books?categoryId=1&page=0&size=999"
      );
      const data = await res.json();

      dispatch(getBooks(data));
      dispatch(dataLoaded(true));
    };
    fetchData();
  };
};

export const getAllBooksByCategoryId = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        `/fee-assessment-books?categoryId=${id}&page=0&size=999`
      );
      const data = await res.json();

      dispatch(getBooksByCategories(data));
      dispatch(dataLoaded(true));
    };
    fetchData();
  };
};

export const getAllCategories = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch("/fee-assessment-categories");
      const data = await res.json();

      dispatch(getCategories(data));
    };

    fetchData();
  };
};

export const getFewBooks = ({ id, num }) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        `/fee-assessment-books?categoryId=${id}&page=0&size=${num}`
      );
      const data = await res.json();

      dispatch(booksCategory(data));
      dispatch(dataLoaded(true));
    };
    fetchData();
  };
};

export const getPagination = (id, num) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        `/fee-assessment-books?categoryId=${id}&page=0&size=${num}`
      );
      const data = await res.json();

      dispatch(booksCategory(data));
      dispatch(dataLoaded(true));
    };
    fetchData();
  };
};

export const loadLocalStorage = () => {
  return (dispatch) => {
    const loadData = localStorage.getItem("bookmarks");

    if (loadData === null) {
      localStorage.setItem("bookmarks", JSON.stringify([]));
    }
    if (loadData) {
      return JSON.parse(loadData);
    }
  };
};
