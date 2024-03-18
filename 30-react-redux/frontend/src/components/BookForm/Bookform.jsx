import "./Bookform.css"
import { useState } from "react"

function Bookform() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    //dispatch action
    if (title && author) {
      console.log(title, author)
      setTitle('')
      setAuthor('')
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
      </form>
    </div>
  )
}

export default Bookform
