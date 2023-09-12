import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

// Define the state structure
interface Book {
  // Your book data structure here, e.g.
  id: string;
  title: string;
  authors: string[];
  categories: string[];
  description: string;
  // ... other book fields
}

type Category = "all" | "art" | "biography" | "computers" | "history" | "medical" | "poetry";
type SortOrder = "relevance" | "newest";

interface SearchState {
  query: string;
  category: Category;
  sortOrder: SortOrder;
  books: Book[];
  startIndex: number;
  isLoading: boolean;
}

const initialState: SearchState = {
  query: '',
  category: 'all',
  sortOrder: 'relevance',
  books: [],
  startIndex: 0,
  isLoading: false,
};

// Define the loadMoreBooks thunk
export const loadMoreBooks =  createAsyncThunk('search/loadMoreBooks', async (_, { getState }) => {
  const state: SearchState = getState() as any;
  const { query, category, sortOrder, startIndex } = state;
  const API_KEY = ''; 

  const endpoint = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}${category !== 'all' ? `+subject:${category}` : ''}&orderBy=${sortOrder}&startIndex=${startIndex}&maxResults=30`;
  
  const response = await fetch(endpoint);
  const data = await response.json();

  return data.items || []; // Return the books or an empty array if items is not present
});

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    
    setCategory: (state, action: PayloadAction<Category>) => {
        state.category = action.payload;
      },
      setSortOrder: (state, action: PayloadAction<SortOrder>) => {
        state.sortOrder = action.payload;
      },
      setQuery: (state, action: PayloadAction<string>) => {
          state.query = action.payload;
        },// ... Your other reducers like setQuery, setCategory, etc.
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMoreBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadMoreBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.books = [...state.books, ...action.payload];
        state.startIndex += 30;
        state.isLoading = false;
      })
      .addCase(loadMoreBooks.rejected, (state) => {
        state.isLoading = false;
      });
  }
});
export const { setQuery, setCategory, setSortOrder } = searchSlice.actions;
export default searchSlice.reducer;
