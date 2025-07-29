// src/App.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Bookdisplay = () => {
  const numberOfBooks = useSelector((state) => state.numberOfBooks);
  const dispatch = useDispatch();

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold mb-4">📚 Book Store</h1>
      <h2 className="text-lg">Number of books in store: {numberOfBooks}</h2>
      <div className="mt-4 space-x-4">
        <button
          onClick={() => dispatch({ type: "BUY_BOOK" })}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Buy Book
        </button>
        <button
          onClick={() => dispatch({ type: "SELL_BOOK" })}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Sell Book
        </button>
      </div>
    </div>
  );
};

export default Bookdisplay;
