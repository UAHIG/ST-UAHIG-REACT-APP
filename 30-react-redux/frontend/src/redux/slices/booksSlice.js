import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import createBookWithID from "../../utils/createBookWithID"
import { setError } from "./errorSlice"

const initialState = {
  books: [],
  isLoadingViaAPI: false,
}

export const fetchBook = createAsyncThunk(
  "books/fetchBook",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url)
      return res.data
    } catch (error) {
      thunkAPI.dispatch(setError(error.message))
      // throw error;
      // or this option
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const bookSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    deleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      }
    },

    toggleFavorite: (state, action) => {
      //   return state.map((book) =>
      //   book.id === action.payload
      //     ? { ...book, isFavorite: !book.isFavorite }
      //     : book
      // )

      // вариант с мутированием обьекта
      state.books.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite
        }
      })
    },
  },

  // OPTION 1 не работает ??
  // extraReducers: {
  //   [fetchBook.pending]: (state, action) => {
  //     state.isLoadingViaAPI = true
  //   },
  //   [fetchBook.fulfilled]: (state, action) => {
  //     state.isLoadingViaAPI = false
  //     if (action.payload.title && action.payload.author) {
  //       state.books.push(createBookWithID(action.payload, "API"))
  //     }
  //   },
  //   [fetchBook.rejected]: (state) => {
  //     state.isLoadingViaAPI = false
  //   },
  // },

  //OPTION 2
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoadingViaAPI = true
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false;
      if (action.payload.title && action.payload.author) {
        state.books.push(createBookWithID(action.payload, "API"))
      }
    });
    builder.addCase(fetchBook.rejected, (state) => {
      state.isLoadingViaAPI = false;
    })
  },
})

export const selectBooks = (state) => state.books.books
export const selectIsLoadingViaAPI = (state) => state.books.isLoadingViaAPI

export default bookSlice.reducer

export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions
