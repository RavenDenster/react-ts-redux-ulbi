import React from 'react'; // ctrl + . - заменить импорты // ctrl + space подробности
import TodoList from './components/TodoList';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <UserList />
      <hr/>
      <TodoList/>
    </div>
  )
}

export default App;
