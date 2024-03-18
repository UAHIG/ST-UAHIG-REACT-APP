import "./BookList.css"
import { useSelector } from "react-redux"

function BookList() {
  const books = useSelector((state) => state.books)
  return (
    <div className='app-block book-list'>
      <h1>Book List</h1>
      {books.length === 0 ? (
        <p>No books avalible</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              <div className='book-info'>
                {++i}. "{book.title}" by:<strong> {book.author}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
