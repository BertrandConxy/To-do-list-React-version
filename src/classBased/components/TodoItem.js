/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  componentWillUnmount() {
    console.log('Cleaning up...');
  }

  editHanddler = () => {
    this.setState({
      editing: true,
    });
  };

  updateDone = (e) => {
    if (e.key === 'Enter') {
      console.log(e.key);
      this.setState({
        editing: false,
      });
    }
  }

  render() {
    const viewMode = {};
    const editMode = {};
    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    const completedSyles = {
      fontSyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'linethrough',
    };
    const { todo, handleChangeProps, delHandlerProps } = this.props;
    const { id, completed, title } = todo;
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.editHanddler} style={viewMode}>
          {' '}
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => handleChangeProps(id)}
          />
          {' '}
          <button type="button" onClick={() => delHandlerProps(id)}>
            Delete
          </button>
          <span style={completed ? completedSyles : null}>{title}</span>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={title}
          onChange={(e) => this.props.updateHandlerProps(e.target.value, id)}
          onKeyDown={this.updadeDone}
        />
      </li>
    );
  }
}

export default TodoItem;
