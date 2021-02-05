import React from 'react'

export default function ToDo({ todo }) {
    return (
        <div>
            <label>
                <input type="checkbox" defaultChecked={todo.complete} />
                {todo.name}
            </label>
        </div>
    )
}
