/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  submitHandler = (e) => {
    if (this.state.title.trim()) {
      e.preventDefault();
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('input the task');
    }
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add to do.."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" className="input-submit" />
      </form>
    );
  }
}

export default InputTodo;
