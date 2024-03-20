import "./Filter.css"
import { useDispatch, useSelector } from "react-redux"
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
} from "../../redux/slices/filterSlice"

function Filter() {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handleResetFilter = () => {
    dispatch(resetFilters())
  }

  return (
    <div className='app-block filter'>
      <div className='filter-row'>
        <div className='filter-group'>
          <input
            onChange={handleTitleFilterChange}
            type='text'
            value={titleFilter}
            placeholder='Filter by title...'
          />
        </div>
        <button type="button" onClick={handleResetFilter}>Reset Filters</button>
      </div>
    </div>
  )
}

export default Filter
