import React, { useState } from 'react';
import './style.css';
import TodoForm from './TodoForm';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { TodoContext } from './store';
// import TodoList from "./TodoList";

const Todo = () => {
  const context = useContext(TodoContext);
  const { todos, completeTodo, removeTodo, updateTodo, filterTodos } = context;
  const [edit, setEdit] = useState({
    id: null,
    content: '',
    isComplete: false,
  });

  const handleUpdateSubmit = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      content: '',
      isComplete: false,
    });
  };

  //   if (edit.id) {
  //     return <TodoForm edit={edit} onSubmit={handleUpdateSubmit} />;
  //   }

  return filterTodos.map((todo, index) => (
    <React.Fragment key={index}>
      {edit.id === todo.id ? (
        <div key={index}>
          <TodoForm edit={edit} onSubmit={handleUpdateSubmit} />
        </div>
      ) : (
        <div
          className={todo.isComplete ? 'todo-complete' : 'todo'}
          key={index}
          // style={{ display: "flex", justifyContent: "center" }}
        >
          <div className='todo__left'>
            <Checkbox
              className='todo__left__checkbox'
              // type="checkbox"
              // defaultChecked={todo.isComplete}
              icon={<CheckCircleOutlineIcon />}
              checkedIcon={<CheckCircleIcon />}
              checked={todo.isComplete}
              onClick={() => completeTodo(todo.id)}
            />
            <div
              key={todo.id}
              onDoubleClick={() => {
                setEdit({
                  id: todo.id,
                  content: todo.content,
                  isComplete: todo.isComplete,
                });
              }}
            >
              {todo.content}
            </div>
          </div>

          <button className='todo__btn__delete' onClick={() => removeTodo(todo.id)}>
            <CloseIcon />
          </button>
        </div>
      )}
    </React.Fragment>
  ));
  // : todos.map((todo, index) => (
  //     <React.Fragment key={index}>
  //       {edit.id === todo.id ? (
  //         <div key={index}>
  //           <TodoForm edit={edit} onSubmit={handleUpdateSubmit} />
  //         </div>
  //       ) : (
  //         <div
  //           className={todo.isComplete ? 'todo-complete' : 'todo'}
  //           key={index}
  //           // style={{ display: "flex", justifyContent: "center" }}
  //         >
  //           <div className='todo__left'>
  //             <Checkbox
  //               className='todo__left__checkbox'
  //               // type="checkbox"
  //               // defaultChecked={todo.isComplete}
  //               icon={<CheckCircleOutlineIcon />}
  //               checkedIcon={<CheckCircleIcon />}
  //               checked={todo.isComplete}
  //               onClick={() => completeTodo(todo.id)}
  //             />
  //             <div
  //               key={todo.id}
  //               onDoubleClick={() => {
  //                 setEdit({
  //                   id: todo.id,
  //                   content: todo.content,
  //                   isComplete: todo.isComplete,
  //                 });
  //               }}
  //             >
  //               {todo.content}
  //             </div>
  //           </div>

  //           <button className='todo__btn__delete' onClick={() => removeTodo(todo.id)}>
  //             <CloseIcon />
  //           </button>
  //         </div>
  //       )}
  //     </React.Fragment>
  //   ));
};

export default Todo;
