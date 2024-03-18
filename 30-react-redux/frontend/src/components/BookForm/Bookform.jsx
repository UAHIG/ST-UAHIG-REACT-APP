import "./Bookform.css"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addBook } from "../../redux/books/actionCreators"
import { v4 as uuidv4 } from "uuid"
import booksData from "../../data/books.json"

function Bookform() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const dispatch = useDispatch()

  const handleAddRanomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]

    const randomBookWithId = {
      ...randomBook,
      id: uuidv4(),
      isFavorite: false
    }
    dispatch(addBook(randomBookWithId))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //dispatch action
    if (title && author) {
      const book = {
        id: uuidv4(),
        title: title,
        author: author,
        isFavorite: false
      }

      dispatch(addBook(book))

      setTitle("")
      setAuthor("")
    }
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
          Add Random book
        </button>
      </form>
    </div>
  )
}

export default Bookform
