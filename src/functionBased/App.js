/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import TodosList from './components/TodosList';

const App = () => {
  const getInitialTodos = () => {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };
  const [todos, setTodos] = useState(getInitialTodos());

  // componentDidMount() {
  //   const temp = localStorage.getItem('todos');
  //   const loadedTodos = JSON.parse(temp);
  //   if (loadedTodos) {
  //     this.setState({
  //       todos: loadedTodos,
  //     });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.todos !== this.state.todos) {
  //     const temp = JSON.stringify(this.state.todos);
  //     localStorage.setItem('todos', temp);
  //   }
  // }
  // useEffect(() => {
  //   console.log('test it');
  //   const temp = localStorage.getItem('todos');
  //   const loadedTodos = JSON.parse(temp);

  //   if (loadedTodos) {
  //     setTodos(loadedTodos);
  //   }
  // }, [setTodos]);

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodoItem = (name) => {
    const newItem = {
      id: uuidv4(),
      title: name,
      completed: false,
    };

    setTodos([...todos, newItem]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.title = updatedTitle;
      }
      return todo;
    }));
  };
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          delHandlerProps={delTodo}
          updateHandlerProps={setUpdate}
        />
      </div>
    </div>
  );
};

export default App;
