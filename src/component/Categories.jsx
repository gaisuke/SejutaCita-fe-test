import React from "react";
import { useSelector } from "react-redux";
import "swiper/css";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useSelector((state) => state.data.categories);

  return (
    <>
      <div className='py-2 px-4 mb-4 order-2'>
        {" "}
        <h1 className='font-bold mb-2 md:text-xl'>Kategori</h1>
        <div className='grid gap-2 grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          {" "}
          {categories.map((cat) => (
            <Link
              className='bg-blue-200 p-2 flex items-center justify-center hover:bg-blue-400 hover:font-bold rounded shadow transition-all'
              key={cat.id}
              to={`/category/${Number(cat.id)}`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
