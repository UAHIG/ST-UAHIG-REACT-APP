import "./Bookform.css"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addBook, fetchBook } from "../../redux/slices/booksSlice"
import booksData from "../../data/books.json"
import createBookWithID from "../../utils/createBookWithID"
import { setError } from "../../redux/slices/errorSlice"

function Bookform() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const dispatch = useDispatch()

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
      dispatch(setError('You must fill title and author'))
    }
  }

  const handdleAddRandomBookViaApi = () => {
    dispatch(fetchBook())
  }

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
        <button type='buttton' onClick={handdleAddRandomBookViaApi}>
          Add Random via API
        </button>
      </form>
    </div>
  )
}

export default Bookform
