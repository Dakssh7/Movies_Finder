import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
import termReducer from "./searchTerm/searchTermSlice"

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    term : termReducer
  },
});
