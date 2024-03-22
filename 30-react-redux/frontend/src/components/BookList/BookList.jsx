import "./BookList.css"
import { useSelector, useDispatch } from "react-redux"
import {
  deleteBook,
  toggleFavorite,
  selectBooks,
} from "../../redux/slices/booksSlice"
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs"
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from "../../redux/slices/filterSlice"

function BookList() {
  const books = useSelector(selectBooks)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id))
  }

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }

  const filtredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())
    const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true
    return matchesTitle && matchesAuthor && matchesFavorite //true or false
  })
  // подсветка строк с пом рег выражения
  const highlightMatch = (text, filter) => {
    if (!filter) return text
    const regex = new RegExp(`(${filter})`, "gi")
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className='highlight'>
            {substring}
          </span>
        )
      }
      return substring
    })
  }

  return (
    <div className='app-block book-list'>
      <h1>Book List</h1>
      {books.length === 0 ? (
        <p>No books avalible</p>
      ) : (
        <ul>
          {filtredBooks.map((book, i) => (
            <li key={book.id}>
              <div className='book-info'>
                {/* до подсветки  */}
                {/* {++i}. "{book.title}" by:<strong> {book.author}</strong> */}
                {++i}. <u>Year {book.year}</u>  "
                {highlightMatch(book.title, titleFilter)}" by:
                <strong>
                  {" "}
                  {highlightMatch(book.author, authorFilter)}
                </strong> -{" "}
                <em>
                  <sup>({book.source})</sup>
                </em>
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
