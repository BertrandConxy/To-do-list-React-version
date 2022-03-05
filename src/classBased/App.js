/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import TodosList from './components/TodosList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.delTodo = this.delTodo.bind(this);
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos.filter((todo) => todo.id !== id)],
    }));
  };

  addTodoItem = (name) => {
    const newItem = {
      id: uuidv4(),
      title: name,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newItem],
    }));
  };

  setUpdate = (updatedTitle, id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            delHandlerProps={this.delTodo}
            updateHandlerProps={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
