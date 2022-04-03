import React, { useState, useEffect } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Bookmark = () => {
  const localData = JSON.parse(localStorage.getItem("bookmarks"));
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("bookmarks"));
    setBookmarks(localData);
  }, []);

  const deleteBookmark = (id) => {
    if (
      window.confirm(
        "Are you sure you want to remove this book from bookmark ?"
      )
    ) {
      const filteredData = localData.filter((book) => book.id !== id);

      localStorage.setItem("bookmarks", JSON.stringify(filteredData));
      setBookmarks(filteredData);
    }
  };

  return (
    <main className='container flex flex-col px-4'>
      {bookmarks.length !== 0 ? (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {bookmarks.map((book) => (
            <div className='relative' key={book.id}>
              <Link to={`/books/${book.category_id}/${book.id}`}>
                <img src={book.cover_url} alt='books' />

                <div>
                  <h2 className='font-bold'>{book.authors}</h2>
                  <h3 className='font-semibold text-gray-400'>
                    {book.category_id === 1 && "Happiness & Mindfullness"}
                    {book.category_id === 11 && "Career & Business"}
                    {book.category_id === 12 &&
                      "Productivity & Time Management"}
                    {book.category_id === 19 && "Society & Polictics"}
                    {book.category_id === 21 && "Investment & Finance"}
                  </h3>
                </div>
              </Link>
              <FaTimesCircle
                className='absolute top-0 right-0 text-black text-2xl hover:text-red-600 cursor-pointer'
                onClick={() => deleteBookmark(book.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <h1 className='text-center'>Kamu belum punya bookmark</h1>
      )}
    </main>
  );
};

export default Bookmark;
