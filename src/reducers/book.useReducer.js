
// constant
const ADD_ITEM_BOOK = 'BOOK/ADD_ITEM';

// initial state
export const initialState = {
  books: []
}

// action creator
export const addItem = (payload) => {
  return {
    type: ADD_ITEM_BOOK,
    payload
  }
}

// reducer
export function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case ADD_ITEM_BOOK: {
      return {
        ...state,
        books: [...state.books, payload]
      }
    }
    default:
      return state
  }
}