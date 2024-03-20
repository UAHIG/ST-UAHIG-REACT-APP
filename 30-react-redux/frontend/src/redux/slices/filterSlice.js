import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {

      //you can mutate state thanks to Immer library
      state.title = action.payload;

      //you can also return new object
      // return {...state, title: action.payload}
    }
  }
})

export const { setTitleFilter } = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title

export default filterSlice.reducer

