import React from 'react'

// context
import { BookProvider } from '../context/BookContext';

// components
import BookForm from '../components/Book/BookForm'
import BookList from '../components/Book/BookList'
import BookTotal from '../components/Book/BookTotal'

function UseContext() {
  return (
    <BookProvider>
      <BookForm />

      <BookTotal />

      <BookList />

    </BookProvider>
  )
}

export default UseContext