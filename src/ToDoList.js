import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos, toggleToDo }) => {
    return (
        todos.map(todo => {
            return <ToDo key={todo.id} toggleToDo={toggleToDo} todo={todo} />
        })
    )
}

export default ToDoList;
