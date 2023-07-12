import React from 'react'

// context
import { useBookContext } from '../../context/BookContext'

function BookList() {
  const { books, handleDelete } = useBookContext();

  console.log('BookList')

  return (
    <div>
      <hr />
      <h4>Book List</h4>
      {books.map(book => (
        <div key={book.id}>
          Title: {book.title} 
          <button type="button" onClick={() => handleDelete(book.id)}>Delete</button>
          <button type="button" onClick={() => {}}>Buy</button>
        </div>
      ))}
    </div>
  )
}

export default BookList