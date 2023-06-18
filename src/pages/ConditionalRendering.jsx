import React from 'react'

import Button from '../components/Button';

function LoginButton() {
  return (
    <Button 
      text="Login"
    />
  )
}

function LogoutButton() {
  return (
    <Button 
      text="Logout"
    />
  )
}

function ConditionalRendering() {
  const [todos, setTodos] = React.useState([]);
  let renderButton =  <LogoutButton />; // initial value

  if(todos.length > 0) {
    renderButton = <LoginButton />
  } 

  function renderButtonFnc() {
    return <div>render button with func</div>
  }

  function handleAddTodo() {
    const item = {
      id: Date.now(),
      title: 'Learn javascript'
    }
    setTodos(prevState => {
      return [...prevState, item]; // push item into array
    })
  }

  console.log('Conditional Rendering: ', todos)

  return (
    <div>
      {todos.length > 0 && <div>has data</div>}

      {todos.length > 0 ? 'has data' : 'no data'}

      <h3>Element Variable</h3>
      {renderButton}
      {renderButtonFnc()}

      <br />
      <Button 
        text="Add Todo"
        handleClick={handleAddTodo}
      />
    </div>
  )
}

export default ConditionalRendering