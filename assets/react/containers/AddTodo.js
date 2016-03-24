import React from 'react';

let nextTodoId = 0;

const AddTodos = (props, { store }) => {
  let input;

  return (
    <div>
      <input ref={(node) => {
        input = node;
      }} />

      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text: input.value
        });
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};

AddTodos.contextTypes = {
  store: React.PropTypes.object
};

export default AddTodos;
