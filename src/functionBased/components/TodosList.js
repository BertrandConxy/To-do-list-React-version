/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => (
  <div className="TodosList">
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          delHandlerProps={props.delHandlerProps}
          updateHandlerProps={props.updateHandlerProps}
        />
      ))}
    </ul>
  </div>
);

export default TodosList;
