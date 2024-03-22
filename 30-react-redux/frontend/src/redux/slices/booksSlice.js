import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import createBookWithID from "../../utils/createBookWithID"

const initialState = []

const bookSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      return [...state, action.payload]
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    toggleFavorite: (state, action)  => {
    //   return state.map((book) =>
    //   book.id === action.payload
    //     ? { ...book, isFavorite: !book.isFavorite }
    //     : book
    // )

    // вариант с мутированием обьекта

    state.forEach((book) => {
      if (book.id === action.payload) {
        book.isFavorite = !book.isFavorite
      }
    })
    },
  }
})

export const thunkFunction = async (dispatch, getState) => {
  try {
    const res = await axios.get("http://localhost:4000/random-book")
    console.log(res)
    if (res?.data?.title && res?.data?.author) {
      dispatch(addBook(createBookWithID(res.data, "by API")))
    }
  } catch (error) {
    console.log('Error fetching RB', error)
  }
}

export const selectBooks = (state) => state.books

export default bookSlice.reducer;

export const {
  addBook,
  deleteBook,
  toggleFavorite,

} = bookSlice.actions

