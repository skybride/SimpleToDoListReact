import React, { useState, useRef, useEffect } from 'react';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const toDoName = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAdd(e) {
    const name = toDoName.current.value;
    if(name === "") return
    setTodos(previous => {
      return [...previous, { id: uuidv4(), name: name, complete: false }]
    });
    toDoName.current.value = null;
  }

  return (
    <>
      <ToDoList todos={todos}/>
      <input ref={toDoName} type="text" />
      <button onClick={handleAdd}>Add</button>
      <button>Clear</button>
      <div>0 tasks left</div>
    </>
  );
}

export default App;
