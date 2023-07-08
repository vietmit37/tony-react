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
      const newTodo = {
        id: uuidv4(),
        text: payload,
      };
      return {
        listTodo: [...state.listTodo, newTodo],
        isLoading: false,
      };
    case "DELETE_TODO":
      const filterList = state.listTodo.filter((item) => item.id !== payload);
      return {
        listTodo: filterList,
      };
    default:
      return state;
  }
};

const ToDoListReducer = () => {
  const refInput = useRef();
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleAdd = () => {
    const inputValue = refInput.current.value;
    if (inputValue.trim() !== "") {
      dispatch({ type: "ADD_TODO_PENDING" });
      setTimeout(() => {
        dispatch({ type: "ADD_TODO_SUCCESS", payload: inputValue });
        refInput.current.value = "";
      }, 500);
    }
  };
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
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
