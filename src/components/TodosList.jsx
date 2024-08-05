import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, completeTodo } from '../state/features/todo/todoSlice';

export default function TodosList () {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    let key = 1;

    return (
        <div style={{ margin: '5px' }}>
            {
                todos.map((todo) => {
                    return <div style={{ padding: '5px' }} key={key++}>
                        <p style={{ margin: '5px', fontSize: '18px', display: 'inline' }}>{todo.title}</p>

                        {todo.isCompleted &&
                            <p style={{ margin: '5px', fontSize: '16px', display: 'inline'}}>, Status - Done</p>
                        }

                        {!todo.isCompleted && 
                            <>
                                <p style={{ margin: '5px', fontSize: '16px', display: 'inline'}}>
                                    , Status - Not Done
                                </p>
                                <button 
                                    style={{ margin: '5px' }}
                                    onClick={() => { dispatch(completeTodo(todo.id)) }}>
                                    Mark as done
                                </button>
                            </>
                        }

                        <button onClick={() => { dispatch(deleteTodo(todo.id)) }}>Delete</button>
                    </div>
                })
            }
        </div>
    )
}