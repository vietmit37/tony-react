import React from 'react'
import Button from '../components/Button';

const initialState = {
  count: 1,
  loading: false,
  users: {
    firstName: 'truong',
    lastName: 'nguyen'
  }
}

function reducer(state = initialState, action) {
  console.log('reducer: ', action)
  switch(action.type) {
    case "INCREMENT": {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case "DECREMENT": {
      return {
        ...state,
        count: state.count - action.payload
      }
    }
    case "SHOW_LOADING": {
      return {
        ...state,
        loading: true,
      }
    }
    case "HIDE_LOADING": {
      return {
        ...state,
        loading: false,
      }
    }
    default:
      return state;
  }
}

function UseReducer() {
  const [{ count, loading }, dispatch] = React.useReducer(reducer, initialState);

  function handleIncrement() {
    dispatch({
      type: 'SHOW_LOADING'
    })

    dispatch({
      type: 'INCREMENT'
    })

    setTimeout(() => {
      dispatch({
        type: 'HIDE_LOADING'
      })
    }, 1000)
    // setLoading(true);
    // setCount(prevState => prevState + 1)
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000)
  }

  function handleDecrement() {
    dispatch({
      type: 'SHOW_LOADING',
    })

    dispatch({
      type: 'DECREMENT',
      payload: 5
    })

    setTimeout(() => {
      dispatch({
        type: 'HIDE_LOADING'
      })
    }, 1000)
  } 

  return (
    <div>
      
      <Button 
        text="Increment"
        handleClick={handleIncrement}
      /> <br />
      Count: {loading ? 'loading...' : count }<br/>

      <Button 
        text="Decrement"
        handleClick={handleDecrement}
      /> 
      <br />

    </div>
  )
}

export default UseReducer