import React, { useState, useRef } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const books = useSelector((state) => state.data.books);
  const [filteredData, setFilteredData] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [clear, setClear] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [byTitle, setByTitle] = useState(true);

  const inputRef = useRef(null);

  const searchHandlerTitle = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setShowSearch(false);
      setClear(false);
    } else {
      const filtered = books.filter((book) => {
        return book.title.toLowerCase().includes(e.target.value.toLowerCase());
      });
      if (filtered) {
        setFilteredData(filtered);
        setShowSearch(true);
        setClear(true);
      } else {
        setShowSearch(false);
      }
    }
  };

  const searchByAuthor = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setShowSearch(false);
      setClear(false);
    } else {
      const filtered = books.find((book) => {
        const data = new RegExp(book.authors.join("|"), "i");
        return data.test(e.target.value.toLowerCase());
      });

      if (filtered !== undefined) {
        setFilteredData([filtered]);
        setShowSearch(true);
        setClear(true);
      }
    }
  };

  const clearHandler = () => {
    setInputValue("");
    setShowSearch(false);
    setClear(false);
  };

  return (
    <div className='flex gap-2 items-center relative w-full'>
      <button
        onClick={() => setByTitle((prev) => !prev)}
        className='px-2 font-bold hover:bg-blue-400 rounded-xl transition-all'
      >
        {byTitle ? "Title" : "Author"}
      </button>
      <div className='w-full  relative flex flex-col'>
        <input
          className='border-2 rounded-xl w-full px-2 md:py-1 focus:outline-blue-600'
          placeholder={`Cari ${byTitle ? "judul" : "penulis"} buku`}
          type='text'
          onChange={byTitle ? searchHandlerTitle : searchByAuthor}
          value={inputValue}
          ref={inputRef}
        />

        {!clear ? (
          <FaSearch
            className='absolute right-2 top-1.5 md:top-2.5 text-gray-400 cursor-pointer'
            onClick={() => inputRef.current.focus()}
          />
        ) : (
          <FaTimes
            className='absolute right-2 top-1.5 md:top-2.5 text-gray-400'
            onClick={clearHandler}
          />
        )}
        {showSearch && (
          <div className='absolute top-7 w-full px-2 bg-white max-h-44 overflow-y-scroll rounded-t-lg'>
            {filteredData.map((book) => (
              <Link
                to={`/books/${book.category_id}/${book.id}`}
                key={book.id}
                className='w-full border-b-2'
              >
                <div className='hover:bg-blue-100 py-2'>
                  <h1 className=' py-1 '>{book.title}</h1>
                  <p className='text-xs'>Authors: {book.authors}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
