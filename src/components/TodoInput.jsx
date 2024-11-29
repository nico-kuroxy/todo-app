/**********************************************************************************************************************/
//   author: ne@solarcleano.com
//   brief: This file defines the TodoInput react component.
//          It is used to register the input from the user.
//   copyright: © 2024 Solarcleano. All rights reserved.
/**********************************************************************************************************************/

import { useState } from "react";

export function TodoInput (props) {
    const {handleAddTodo} = props;
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="input-container">
            <input 
                value ={inputValue}
                onChange={(e)=>{setInputValue(e.target.value)}}
                placeholder="Add task"
            />
            <button onClick={() => {
                if (!inputValue) return;
                handleAddTodo(inputValue);
                setInputValue("");
                }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}
