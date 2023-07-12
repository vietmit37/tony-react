import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// reducer
import { reducer, initialState, addItem } from '../reducers/book.useReducer';

const BookContext = React.createContext();

export const BookProvider = ({ children }) => {
  const [{ books }, dispatch] = React.useReducer(reducer, initialState);

  console.log("BookProvider: ", books);

  function handleAdd(title) {
    const item = {
      id: uuidv4(),
      title,
      isBought: false
    }
    dispatch(addItem(item))
  }

  function handleDelete(id) {
    console.log("handleDelete: ", id)
  }
  
  return (
    <BookContext.Provider
      value={{
        // states
        books,
        // actions
        handleAdd,
        handleDelete,
      }}
    >
      {children}
    </BookContext.Provider>
  )
}

export const useBookContext = () => React.useContext(BookContext);