import React from 'react';
import PropTypes from 'prop-types';

export const ListTodos = ({ todos, type, onChange, onDelete }) => {
  if (type === 'new') {
    todos = todos.filter(todo => (todo.type === 'new' ? todo : null));
  } else if (type === 'completed') {
    todos = todos.filter(todo => (todo.type === 'completed' ? todo : null));
  }

  return (
    <React.Fragment>
      {todos.map(todo => {
        return (
          <div className="todo" key={todo.id} id={todo.id}>
            <input
              type="checkbox"
              onClick={onChange}
              defaultChecked={todo.type === 'completed' ? true : false}
            />

            <span>{todo.text}</span>
            <button onClick={onDelete}>Delete</button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

ListTodos.defaultProps = {
  todos: [],
  type: undefined,
  onChange: () => console.log('Missing parameter onChange!'),
  onDelete: () => console.log('Missing parameter onDelete!'),
};

ListTodos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      type: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(undefined)]),
    }),
  ).isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(undefined)]),
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
