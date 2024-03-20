import "./Filter.css"
import { useDispatch, useSelector } from "react-redux"
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  setAuthorFilter,
  selectAuthorFilter,
  setOnlyFavoriteFilter,
  selectOnlyFavoriteFilter,
} from "../../redux/slices/filterSlice"

function Filter() {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)


  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleResetFilter = () => {
    dispatch(resetFilters())
  }

  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter())
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
        <div className='filter-group'>
          <input
            onChange={handleAuthorFilterChange}
            type='text'
            value={authorFilter}
            placeholder='Filter by Author...'
          />
        </div>
        <div className="filter-group">
          <label>
            <input type="checkbox" checked={onlyFavoriteFilter} onChange={handleOnlyFavoriteFilterChange} />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilter}>Reset Filters</button>
      </div>
    </div>
  )
}

export default Filter
