/**********************************************************************************************************************/
//   author: ne@solarcleano.com
//   brief: This file defines the TodoCard react component.
//          It is used to instanciate a todo card.
//   copyright: © 2024 Solarcleano. All rights reserved.
/**********************************************************************************************************************/

export function TodoCard (props) {
    const {todo, todoIndex, handleDeleteTodo, handleCompleteTodo} = props;
    return (
        <div className="card todo-item">
            <p>
                {todo.input}
            </p>
            <div className="todo-buttons">
                <button 
                    onClick={() => {
                        handleCompleteTodo(todoIndex);
                    }}
                    disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button 
                    onClick={() => {
                        handleDeleteTodo(todoIndex)}}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}