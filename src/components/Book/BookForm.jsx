import React from 'react'

// context
import { useBookContext } from '../../context/BookContext'

function BookForm() {
  const [title, setTitle] = React.useState('');
  const { handleAdd } = useBookContext();

  console.log("BookForm: ", title)

  return (
    <div>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
      <button 
        onClick={() => {
          setTitle('');
          handleAdd(title)
        }}
      >
        Add
      </button>
    </div>
  )
}

export default BookForm