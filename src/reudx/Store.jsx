// src/redux/store.js

import { createStore } from "redux";
import bookReducer from "./Bookreducer";

const store = createStore(bookReducer);

export default store;
