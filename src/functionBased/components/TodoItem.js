/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  // componentWillUnmount() {
  //   console.log('Cleaning up...');
  // }

  useEffect(() => () => console.log(' cleaned up'), []);

  const editHanddler = () => {
    setEditing(true);
  };

  const updateDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
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
  const { todo, handleChangeProps, delHandlerProps } = props;
  const { id, completed, title } = todo;
  return (
    <li className={styles.item}>
      <div onDoubleClick={editHanddler} style={viewMode}>
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
        onChange={(e) => props.updateHandlerProps(e.target.value, id)}
        onKeyDown={() => updateDone()}
      />
    </li>
  );
};

export default TodoItem;
