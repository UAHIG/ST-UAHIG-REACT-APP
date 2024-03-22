import "./Bookform.css"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addBook } from "../../redux/slices/booksSlice"
import booksData from "../../data/books.json"
import createBookWithID from "../../utils/createBookWithID"
import axios from "axios"

function Bookform() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const dispatch = useDispatch()

  const handleAddRanomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]
    const randomBookWithId = createBookWithID(randomBook)

    dispatch(addBook(randomBookWithId))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //dispatch action
    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author })))
      setTitle("")
      setAuthor("")
    }
  }

  const handdleAddRandomBookViaApi = async () => {
    try {
      const res = await axios.get("http://localhost:4000/random-book")
      console.log(res)
      if (res?.data?.title && res?.data?.author) {
        dispatch(addBook(createBookWithID(res.data)))
      }
    } catch (error) {
      console.log("Щибочку")
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
