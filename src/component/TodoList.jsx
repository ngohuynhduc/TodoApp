import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  const [filterConditions, setFilterConditions] = useState('ALL');

  const addTodo = (todo) => {
    if (!todo.content.trim()) {
      return;
    }
    setTodos([todo, ...todos]);
  };

  const removeTodo = (id) => {
    const removeTodoArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeTodoArr);
  };

  const updateTodo = (todoId, updatedValue) => {
    if (!updatedValue.content.trim()) {
      return;
    }
    setTodos((prev) => prev.map((todo) => (todo.id === todoId ? updatedValue : todo)));
  };

  const completeTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const handleFilter = (filter) => {
    setFilterConditions(filter);
  };

  const clearCompletedTodos = () => {
    const clearArr = [...todos].filter((todo) => todo.isComplete === false);
    setTodos(clearArr);
  };

  const searchTodos = (input) => {
    let searchData = [...todos].filter((todo) =>
      todo.content.toLowerCase().includes(input.toLowerCase())
    );
    setFilterTodos(searchData);
  };
  useEffect(() => {
    switch (filterConditions) {
      case 'COMPLETED':
        setFilterTodos([...todos].filter((todo) => todo.isComplete));
        break;
      case 'ACTIVE':
        setFilterTodos([...todos].filter((todo) => !todo.isComplete));
        break;
      default:
        setFilterTodos(todos);
    }
  }, [filterConditions, todos]);

  return (
    <div className='container'>
      <h1 className='title'>Todos</h1>
      <div className='container__todos'>
        {/* <TodoForm onSubmit={addTodo} searchTodos={searchTodos} />
        <Todo
          filterTodos={filterTodos}
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
        <Footer
          todos={todos}
          filterConditions={filterConditions}
          handleFilter={handleFilter}
          clearCompletedTodos={clearCompletedTodos}
        /> */}
      </div>
    </div>
  );
};

export default TodoList;
