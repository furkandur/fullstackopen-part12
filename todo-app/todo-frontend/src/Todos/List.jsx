import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <React.Fragment key={todo._id}>
          {index !== 0 && <hr key={`hr-${todo._id}`} />}
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        </React.Fragment>
      ))}
    </>
  )
}

export default TodoList
