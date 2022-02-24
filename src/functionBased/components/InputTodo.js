/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });
  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    }
  };
  return (
    <form onSubmit={submitHandler} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button type="button" className="input-submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default InputTodo;
