import "./BookList.css"
import { useSelector, useDispatch } from "react-redux"
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators"
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs"

function BookList() {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id))
  }

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id))
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
                <span onClick={() => handleToggleFavorite(book.id)}>
                {book.isFavorite ? (
                  <BsBookmarkStarFill className='star-icon' />
                ) : (
                  <BsBookmarkStar className='star-icon' />
                )}
                </span>
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