import "./Bookform.css"
import { useDispatch, useSelector } from "react-redux"
import { FaSpinner } from "react-icons/fa"
import { useState } from "react"
import { addBook, fetchBook, selectIsLoadingViaAPI } from "../../redux/slices/booksSlice"
import booksData from "../../data/books.json"
import createBookWithID from "../../utils/createBookWithID"
import { setError } from "../../redux/slices/errorSlice"

function Bookform() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const dispatch = useDispatch()
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI)

  const handleAddRanomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]
    const randomBookWithId = createBookWithID(randomBook, "random")

    dispatch(addBook(randomBookWithId))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //dispatch action
    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author }, "manual")))
      setTitle("")
      setAuthor("")
    } else {
      dispatch(setError("You must fill title and author"))
    }
  }

  const handdleAddRandomBookViaApi = () => {
    dispatch(fetchBook("http://localhost:4000/random-book-delayed"))
  };

  return (
    <div className='app-block book-form'>
      <h2>Add new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title: </label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <label htmlFor='title'>Author: </label>
            <input
              type='text'
              id='author'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        </div>
        <button type='submit'>Add book</button>
        <button type='button' onClick={handleAddRanomBook}>
          Add Random
        </button>
      </form>
      <button
        type='buttton'
        onClick={handdleAddRandomBookViaApi}
        disabled={isLoadingViaAPI}>
        {isLoadingViaAPI ? (
          <>
            <span>Loading book.....</span>
            <FaSpinner className='spinner' />
          </>
        ) : (
          "Add Random via API"
        )}
      </button>
    </div>
  )
}

export default Bookform
