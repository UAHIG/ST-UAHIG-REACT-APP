import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  title: "",
  author: "",
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      //you can mutate state thanks to Immer library
      state.title = action.payload
      //you can also return new object
      // return {...state, title: action.payload}
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
    resetFilters: () => {
      return { ...initialState }
    },
    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite
    },
  },
})

export const {
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
  setOnlyFavoriteFilter,
} = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite

export default filterSlice.reducer
