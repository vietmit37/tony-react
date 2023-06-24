import React from 'react'

import Button from './Button';

function TodoList({ todo, deleteItem }) {
  return (
    <div>
      Id: {todo.id} <br />
      Title: {todo.title} <br />
      <Button text="Delete" handleClick={() => deleteItem(todo.id)} />
    </div>
  )
}

export default TodoList