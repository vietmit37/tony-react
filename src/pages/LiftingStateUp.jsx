import React from 'react'
import Button from '../components/Button'
import { v4 as uuidv4 } from 'uuid';

// components
import TodoList from '../components/TodoList';

function LiftingStateUp() {
  const [todos, setTodos] = React.useState([
    { id: 1, title: 'learn javascript' }
  ])
  const [input, setInput] = React.useState('');

  function handleAddItem() {
    const item = {
      name: input,
      id: uuidv4(),
    }
    setTodos(prevState => {
      return [...prevState, item]
    })
  }

  function onChangeInput(e) {
    setInput(e.target.value)
  }

  function deleteItem(todoId) {
    console.log('deleteItem: ', todoId)
  }

  return (
    <div>
      <input type="text" value={input} onChange={onChangeInput} />
      <Button 
        text="Add item"
        handleClick={handleAddItem}
      />
      {todos.map(todo => {
        return <TodoList todo={todo} deleteItem={deleteItem} />
      })}
    </div>
  )
}

export default LiftingStateUp