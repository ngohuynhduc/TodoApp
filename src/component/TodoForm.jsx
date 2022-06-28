import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { TodoContext } from './store';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = (props) => {
  const context = useContext(TodoContext);
  const [input, setInput] = useState(props.edit ? props.edit.content : '');

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.edit) {
      props.onSubmit({
        id: uuidv4(),
        content: input,
        isComplete: false,
      });
    } else {
      context.addTodo({
        id: uuidv4(),
        content: input,
        isComplete: false,
      });
    }
    // props.onSubmit({ id: uuidv4(), content: input, isComplete: false });
    setInput('');
  };
  // useEffect(() => {
  //   if(props.edit. !== input)
  // }, [props.edit])

  // console.log(props.edit);
  return (
    <div className='form__container'>
      <form onSubmit={handleSubmit}>
        {/* <Checkbox
          className='todo__left__checkbox'
          icon={<CheckCircleOutlineIcon />}
          checkedIcon={<CheckCircleIcon />}
          // checked={todo.isComplete}
          // onClick={props.completeAllTodos}
        /> */}
        <input
          className='form__input'
          ref={inputRef}
          value={input}
          placeholder='What needs to be done?'
          onChange={handleChange}
          onKeyUp={!props.edit ? () => context.searchTodos(input) : null}
          // onKeyUp={() => context.searchTodos(input)}
        />
      </form>
    </div>
  );
};

export default TodoForm;
