import { Button } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { TodoContext } from './store';

const Footer = () => {
  // console.log(todos.length);
  const context = useContext(TodoContext);
  const { todos, clearCompletedTodos, handleFilter, filterConditions } = context;
  let filteredFalse = todos.filter((todo) => todo.isComplete === false).length;
  let filteredTrue = todos.filter((todo) => todo.isComplete === true).length;
  return (
    <div className='footer'>
      <div className='footer__items-left'>
        {filteredFalse} {filteredFalse > 1 ? 'items' : 'item'} left
      </div>
      <div className='footer__btn'>
        <Button
          variant={filterConditions === 'ALL' ? 'contained' : 'outlined'}
          onClick={() => handleFilter('ALL')}
        >
          All
        </Button>
        <Button
          variant={filterConditions === 'ACTIVE' ? 'contained' : 'outlined'}
          onClick={() => handleFilter('ACTIVE')}
        >
          Active
        </Button>
        <Button
          variant={filterConditions === 'COMPLETED' ? 'contained' : 'outlined'}
          onClick={() => handleFilter('COMPLETED')}
        >
          Completed
        </Button>
      </div>
      <div className='footer__clear'>
        <button
          className={
            filteredTrue
              ? 'footer__clear__btn footer__clear__btn--active'
              : 'footer__clear__btn footer__clear__btn--disabled'
          }
          onClick={clearCompletedTodos}
        >
          Clear All Completed
        </button>
      </div>
    </div>
  );
};

export default Footer;
