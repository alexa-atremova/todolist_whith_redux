import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice";

import { loadFromLocalStorage } from "./localStorage";
import { localStorageMiddleware } from "./middleware";

export default configureStore({
  reducer: { todo: todoSlice },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: loadFromLocalStorage(),
});
