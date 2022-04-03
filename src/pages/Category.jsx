import React, { useEffect, useState, useRef } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Spinner from "../component/Spinner";
import { getAllCategories, getFewBooks } from "../store/dataAction";
import { dataLoaded } from "../store/dataSlice";

const Category = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [inputData, setInputData] = useState("");
  const [filteredData, setFilteredData] = useState();
  const [showSearch, setShowSearch] = useState(true);
  const [byTitle, setByTitle] = useState(true);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.data.loaded);
  const params = useParams();
  const fewBooks = useSelector((state) => state.data.booksCategory);

  const id = Number(params.cat);

  const pagination = fewBooks.length + 4;

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getFewBooks({ id: id, num: 4 }));
  }, [dispatch, id]);

  if (loaded) {
    setFilteredData(fewBooks);
    setIsLoading(false);
    dispatch(dataLoaded(false));
  }

  if (isLoading) {
    return <Spinner />;
  }

  const searchByTitleHandler = (e) => {
    setInputData(e.target.value);
    if (e.target.value === "") {
      setFilteredData(fewBooks);
      setShowSearch(true);
    } else {
      const filtered = fewBooks.filter((book) => {
        return book.title.toLowerCase().includes(e.target.value.toLowerCase());
      });

      setFilteredData(filtered);
      setShowSearch(false);
    }
  };

  const searchByAuthor = (e) => {
    setInputData(e.target.value);
    if (e.target.value === "") {
      setFilteredData(fewBooks);
      setShowSearch(true);
    } else {
      const filtered = fewBooks.find((book) => {
        const data = new RegExp(book.authors.join("|"), "i");
        return data.test(e.target.value.toLowerCase());
      });

      if (filtered !== undefined) {
        setFilteredData([filtered]);
        setShowSearch(true);
      }
    }
  };

  const searchButtonHandler = () => {
    inputRef.current.focus();
  };

  const clearInput = () => {
    setInputData("");
    setFilteredData(fewBooks);
  };

  return (
    <div className='flex flex-col w-full container'>
      <div className='flex gap-2 px-4 relative mb-4 w-full'>
        <button
          className='hover:bg-blue-200 rounded-lg px-1'
          onClick={() => setByTitle((prev) => !prev)}
        >
          {byTitle ? "Title" : "Author"}
        </button>
        <div className='relative w-full'>
          <input
            id='search'
            className='w-full border-2 focus:outline-blue-600 px-2 rounded shadow md:py-1'
            type='text'
            placeholder='Cari kategori ini'
            onChange={byTitle ? searchByTitleHandler : searchByAuthor}
            value={inputData}
            ref={inputRef}
          />

          {showSearch ? (
            <FaSearch
              className='absolute right-3 top-1.5 md:top-2.5 cursor-pointer'
              onClick={searchButtonHandler}
            />
          ) : (
            <FaTimes
              className='absolute right-3 top-1.5 md:top-2.5 cursor-pointer'
              onClick={clearInput}
            />
          )}
        </div>
      </div>
      <main className='flex flex-col px-4 w-full'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {filteredData.map((book) => (
            <Link key={book.id} to={`/books/${book.category_id}/${book.id}`}>
              <img src={book.cover_url} alt='books' />

              <div className=''>
                <h2 className='font-bold'>{book.authors}</h2>
                <h3 className='font-semibold text-gray-400'>
                  {Number(params.cat) === 1 && "Happiness and Mindfulness"}
                  {Number(params.cat) === 11 && "Career and Business"}
                  {Number(params.cat) === 12 &&
                    "Productivity and Time Management"}
                  {Number(params.cat) === 19 && "Society & Politics"}
                  {Number(params.cat) === 121 && "Investment & Finance"}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <button
          className='text-center p-4 font-semibold hover:text-blue-400'
          onClick={() => dispatch(getFewBooks({ id, num: pagination }))}
        >
          Load more ...
        </button>
      </main>
    </div>
  );
};

export default Category;
