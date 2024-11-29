import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';

import { useState, useEffect } from 'react';

function App() {

  // Define the state variables.
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete:true }
  ]);
  const [currentTab, setCurrentTab] = useState("Open");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false}];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    // Update/edit/modify
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    // Update/edit/modify
    let newTodoList = todos.filter((val, valIndex) => {
      console.log(val, valIndex);
      return index !== valIndex;
    })
    console.log("Old list", todos);
    console.log("New list", newTodoList);
    setTodos(newTodoList);
    handleSaveData(newTodoList);
    // Log
    console.log("Removed task card number", index);
  }

  function handleSaveData(currentTodos){
    localStorage.setItem("todo-app", JSON.stringify({todos: currentTodos}))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos}/>
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} todos={todos}/>
      <TodoList 
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        currentTab={currentTab}
        todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo} todos={todos}/>
    </>
  )
}

export default App
