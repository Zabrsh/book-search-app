import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Book {
  id: string;
  title: string;
  authors: string[];
  categories: string[];
  description: string;
  image: string;
}

interface BookState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: BookState = {
  books: [],
  loading: false,
  error: null
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchBooksStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBooksSuccess: (state, action: PayloadAction<Book[]>) => {
      state.loading = false;
      state.books = action.payload;
    },
    fetchBooksError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { fetchBooksStart, fetchBooksSuccess, fetchBooksError } = bookSlice.actions;
export default bookSlice.reducer;
