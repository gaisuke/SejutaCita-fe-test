import React, { useState, createContext } from 'react';

const BooksContext = createContext();

function BooksProvider(props) {
  const [ListBooks, setListBooks] = useState([]);
  const [ListCategories, setListCategories] = useState([]);

  return (
    <BooksContext.Provider value={{ books: [ListBooks, setListBooks], categories: [ListCategories, setListCategories]}}>
      {props.children}
    </BooksContext.Provider>
  );
}

export { BooksContext, BooksProvider };
