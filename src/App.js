import React, { useState, useRef, useEffect } from 'react';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

const App = () => {
  const [todos, setTodos] = useState([]);
  const toDoName = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const handleAdd = (e) => {
    const name = toDoName.current.value;
    if(name === "") return
    setTodos(previous => {
      return [...previous, { id: uuidv4(), name: name, complete: false }]
    });
    toDoName.current.value = null;
  }

  const toggleToDo = (id) => {
    const newToDos = [...todos]
    const todo = newToDos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newToDos)
  }

  const handleClear = (e) => {
    const newToDos = todos.filter(todo => !todo.complete)
    setTodos(newToDos);
  }

  return (
    <>
      <input ref={toDoName} type="text" />
      <button onClick={handleAdd}>Add</button>
      <ToDoList todos={todos} toggleToDo={toggleToDo}/>
      <button onClick={handleClear}>Remove</button>
    </>
  );
}

export default App;
