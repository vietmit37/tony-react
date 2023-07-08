import React, { useRef, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  listTodo: [],
  isLoading: false,
};

const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TODO_PENDING":
      return {
        ...state,
        isLoading: true,
      };

    case "ADD_TODO_SUCCESS":
      return {
        listTodo: [...state.listTodo, payload],
        isLoading: false,
      };

    case "DELETE_TODO":
      return {
        listTodo: payload,
      };
    default:
      return state;
  }
};

const ToDoListReducer = () => {
  const refInput = useRef();
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      dispatch({ type: "ADD_TODO_PENDING" });
      
      const newTodo = {
        id: uuidv4(),
        text: inputValue,
      };

      setTimeout(() => {
        dispatch({ type: "ADD_TODO_SUCCESS", payload: newTodo });
        refInput.current.value = "";
      }, 500);
    }
  };
  const handleDelete = (id) => {
    const todoFiltered = state.listTodo.filter((item) => item.id !== id);
    dispatch({ type: "DELETE_TODO", payload: todoFiltered });
  };

  return (
    <div>
      <input type="text" ref={refInput} />
      <button onClick={handleAdd}>Add</button>
      <h2>ToDoList Reducer</h2>
      {state.isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {state.listTodo.map(({ text, id }) => (
            <li key={id}>
              <span
                onClick={() => handleDelete(id)}
                style={{ cursor: "pointer" }}
              >
                {text}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDoListReducer;
