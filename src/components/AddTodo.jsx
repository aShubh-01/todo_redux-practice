import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../state/features/todo/todoSlice';

export default function AddTodo () {
    const [todoTitle, setTodoTitle] = useState('');
    const dispatch = useDispatch();
    const inputBox = useRef();

    function addTodoHandler() {
        dispatch(addTodo(todoTitle))
        setTodoTitle('');
        inputBox.current.value = ''
    }

    function handleEnterEvent (event) {
        if(event.key === 'Enter') addTodoHandler();
    }

    return (
        <div>
            <input style={{
                border: '2px solid black',
                padding: '5px',
                margin: '5px'
            }}
                type='text' placeholder='Todo Title'
                ref={inputBox} onChange={(e) => {setTodoTitle(e.target.value)}}/>
            
            <button style={{
                padding: '5px'
            }}
            onClick={addTodoHandler}
            onKeyDown={handleEnterEvent}>
                Add Todo
            </button>
        </div>
    )
}