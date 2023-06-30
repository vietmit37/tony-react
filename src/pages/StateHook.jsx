import React from 'react'

const createInitialTodos = () => {
  console.log('createInitialTodos')
  return [
    { id: 1, title: 'Todo 1', completed: false },
  ]
}

function StateHook() {
  const [, setCount] = React.useState(1);
  const [number, setNumber] = React.useState(10);
  // const [todos, setTodos] = React.useState(createInitialTodos()); // Passing the initial state directly: createInitialTodos() is only used for the initial render, you’re still calling this function on every render
  const [todos, setTodos] = React.useState(createInitialTodos); // Passing the initializer function: you’re passing createInitialTodos, which is the function itself. If you pass a function to useState, React will only call it during initialization.


  console.log('todos: ', todos)


  function handleIncrement() {
    // auto batching update
    // setNumber(number + 1);
    // setNumber(number + 1);
    // setNumber(number + 1);

    // updater function
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);

    console.log('handleIncrement: ', number);
  }

  return (
    <div>
      StateHook
      Number: {number} <br />
      <button onClick={handleIncrement}>+</button>


    </div>
  )
}

export default StateHook