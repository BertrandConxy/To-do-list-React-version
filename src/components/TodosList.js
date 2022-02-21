/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodosList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="TodosList">
        <ul>
          {this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              delHandlerProps={this.props.delHandlerProps}
              updateHandlerProps={this.props.updateHandlerProps}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodosList;
