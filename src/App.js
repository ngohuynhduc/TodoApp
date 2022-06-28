import logo from './logo.svg';
import './App.css';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';
import Todo from './component/Todo';
import Footer from './component/Footer';
function App() {
  return (
    <div className='App'>
      {/* <TodoList /> */}
      <div className='container'>
        <h1 className='title'>Todos</h1>
        <div className='container__todos'>
          <TodoForm />
          <Todo />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
