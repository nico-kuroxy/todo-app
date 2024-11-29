/**********************************************************************************************************************/
//   author: ne@solarcleano.com
//   brief: This file defines the TodoList react component.
//          It is used to create a todolist.
//   copyright: © 2024 Solarcleano. All rights reserved.
/**********************************************************************************************************************/

import { TodoCard } from "./TodoCard";

export function TodoList (props) {
    const {todos, currentTab} = props
    const filterTodoList = currentTab === 'All'?
        todos :
        currentTab === 'Completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete);

    return (
        <>
            {filterTodoList.map((todo, todoIndex)=>{
                console.log(todoIndex);
                return (
                    <TodoCard 
                        key={todoIndex} 
                        todoIndex={todos.findIndex(val => val.input == todo.input)}
                        // The props needs to be passed BEFORE any destructured argument.
                        {...props}
                        todo={todo}
                    />
                )
            })}
        </>
    )
}
