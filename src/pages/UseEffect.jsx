import React from 'react'
import axios from 'axios';
import Button from '../components/Button'

function UseEffect() {
  const [forceUpdate, setForceUpdate] = React.useState(Date.now());
  const [todos, setTodos] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    console.log('useEffect 1')

    // only run when component re-render or will be unmounted
    return () => {
      console.log("clean up function useEffect 1")
    }
  }); // always run

  React.useEffect(() => {
    console.log('useEffect with empty dependency')

     // only run when component re-render or will be unmounted
    return () => {
      console.log("clean up function useEffect with empty dependency")
    }
  }, []); // only run once when component first render

  React.useEffect(() => {
    console.log('useEffect with dependency')
  }, [forceUpdate]); // re-run when dependencies change

  // call api
  React.useEffect(() => {
    // fetch(`https://tony-auth-express.vercel.app/api/todo?page=${page}&limit=2`)
    //   .then(res => res.json())
    //   .then(data => setTodos(data.data))

    axios.get(`https://tony-auth-express.vercel.app/api/todo?page=${page}&limit=2`)
      .then(data => setTodos(data.data.data))
  }, [page])
  
  function handleChangePage() {
    setPage(prevState => prevState + 1)
  }

  console.log("-------------")
  console.log("render")

  return (
    <div>
      <Button text='ForceUpdate' handleClick={() => setForceUpdate(Date.now())} />
      <h3>Todo List</h3> <br />
      {todos.map(todo => {
        return (
          <div>
            Title: {todo.title} <br />
            Description: {todo.description} <br/>
          </div>
        )
      })}
      <br />
      <Button text={`Page ${page}`} handleClick={handleChangePage} />

    </div>
  )
}

export default UseEffect