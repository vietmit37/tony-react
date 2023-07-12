import React from 'react'

// context
import { useBookContext } from '../../context/BookContext'

function BookTotal() {
  const { books } = useBookContext();

  console.log("BookTotal: ")

  return (
    <div>
      <hr />
      BookTotal: {books.length}

    </div>
  )
}

export default BookTotal