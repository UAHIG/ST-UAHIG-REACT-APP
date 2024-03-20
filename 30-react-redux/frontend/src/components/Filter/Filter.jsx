import "./Filter.css"
import { useDispatch, useSelector } from "react-redux"
import { setTitleFilter, selectTitleFilter } from "../../redux/slices/filterSlice"

function Filter() {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  return (
    <div className='app-block filter'>
      <div className='filter-group'>
        <input
          onChange={handleTitleFilterChange}
          type='text'
          value={titleFilter}
          placeholder='Filter by title...'
        />
      </div>
    </div>
  )
}

export default Filter
