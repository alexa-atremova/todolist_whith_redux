import { saveToLocalStorage } from "./localStorage";

export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  saveToLocalStorage(store.getState());
  return result;
};
