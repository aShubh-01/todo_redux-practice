import { useDispatch, useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import { updateTodo, completeTodo, deleteTodo } from '../state/features/todo/todoSlice'; // Adjust the import based on where your actions are defined

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay * 1000);
    }
}

export default function TodosList() {
    let key = 1;
    const dispatch = useDispatch();
    const inputRef = useRef();
    const todos = useSelector(state => state.todos);

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    const debouncedDispatch = debounce((todoId, value) => { 
        dispatch(updateTodo({ id: todoId, title: value }));
    }, 3);

    return (
        <div style={{ margin: '5px' }}>
            {
                todos.map((todo) => {
                    return (
                        <div style={{ padding: '5px' }} key={key++}>
                            <input
                                type='text'
                                placeholder={todo.title}
                                style={{ margin: '5px', fontSize: '18px', display: 'inline', border: '0px', borderBottom: '1px solid black' }}
                                ref={inputRef}
                                onChange={(event) => {
                                    inputRef.current.value = event.target.value;
                                    debouncedDispatch(todo.id, event.target.value)
                                }}
                            />

                            {todo.isCompleted ? (
                                <p style={{ margin: '5px', fontSize: '16px', display: 'inline' }}>
                                    , Status - Done
                                </p>
                            ) : (
                                <>
                                    <p style={{ margin: '5px', fontSize: '16px', display: 'inline' }}>
                                        , Status - Not Done
                                    </p>
                                    <button
                                        style={{ margin: '5px' }}
                                        onClick={() => { dispatch(completeTodo(todo.id)) }}>
                                        Mark as done
                                    </button>
                                </>
                            )}

                            <button onClick={() => { dispatch(deleteTodo(todo.id)) }}>Delete</button>
                        </div>
                    );
                })
            }
        </div>
    );
}
