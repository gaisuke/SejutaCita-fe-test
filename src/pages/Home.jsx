import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../component/Categories";
import {
  getAllBooks,
  getAllCategories,
  loadLocalStorage,
} from "../store/dataAction";
import { dataLoaded } from "../store/dataSlice";

const Home = () => {
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.data.loaded);
  const books = useSelector((state) => state.data.books);
  const random = Math.floor(Math.random() * books.length);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllBooks());
    dispatch(loadLocalStorage());
  }, [dispatch]);

  if (loaded) {
    dispatch(dataLoaded(false));
  }

  return (
    <>
      <main className='container grid grid-cols-1'>
        <Categories />
      </main>
      <h1 className='text-center text-2xl font-bold mt-14'>Silahkan pilih kategori</h1>
    </>
  );
};

export default Home;
