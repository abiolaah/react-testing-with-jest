import React from 'react'

const Todo = ({ todo }) => {
    const { id, title, completed } = todo;
    const h1= <h1>{title}</h1>;
    const text = completed ? <strike>{h1}</strike> : h1;
    //<strike><h1>make dinner</h1></strike>
  return (
    <div data-testid={`todo-${id}`} key={id}>
     { text }
    </div>
  )
}

export default Todo
