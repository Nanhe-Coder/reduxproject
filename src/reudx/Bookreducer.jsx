// src/redux/bookSlice.js

import {BUY_BOOK,SELL_BOOK} from "./Actiontypes"

const initialState = {
  numberOfBooks: 10,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        numberOfBooks: state.numberOfBooks > 0 ? state.numberOfBooks - 1 : 0,
      };
    case SELL_BOOK:
      return {
        ...state,
        numberOfBooks: state.numberOfBooks + 1,
      };
    default:
      return state;
  }
};

export default bookReducer;
