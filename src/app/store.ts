import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../features/books/bookSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    books: bookReducer,
    search: searchReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
