import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../component/Categories";
import Category from "./Category";
import {
  getAllBooks,
  getAllCategories,
  loadLocalStorage,
} from "../store/dataAction";
import { dataLoaded } from "../store/dataSlice";

const Home = () => {
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.data.loaded);

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
        <Category />
      </main>
    </>
  );
};

export default Home;
