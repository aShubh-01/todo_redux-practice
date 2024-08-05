import { createSlice, nanoid } from '@reduxjs/toolkit';

export const initialState = {
    todos: [{
        id: 1,
        label: "D1",
        isCompleted: false
    }]
}

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                label: action.payload,
                isCompleted: false
            }
            state.todos.push(todo)
        },

        completeTodo: (state, action) => {
            state.todos.forEach((todo) => {
                if(todo.id === action.id) todo.isCompleted = true;
            })
        },

        deleteTodo: (state, action) => {
            state.todos.filter((todo) => {
                return todo.id !== action.payload
            })
        }
    }   
})

export const {addTodo, completeTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer;