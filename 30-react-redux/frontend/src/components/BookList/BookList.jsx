import "./BookList.css"
import { useSelector, useDispatch } from "react-redux"
import { deleteBook } from "../../redux/books/actionCreators"

function BookList() {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id))
  }
  return (
    <div className='app-block book-list'>
      <h1>Book List</h1>
      {books.length === 0 ? (
        <p>No books avalible</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className='book-info'>
                {++i}. "{book.title}" by:<strong> {book.author}</strong>
              </div>
              <div className='book-actions'>
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
