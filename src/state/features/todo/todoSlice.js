import { createSlice, nanoid } from '@reduxjs/toolkit';

export const initialState = {
    todos: [{
        id: 1,
        title: "Do something",
        isCompleted: false
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload,
                isCompleted: false
            }
            state.todos.push(todo)
        },

        updateTodo: (state, action) => {
            state.todos.filter((todo) => {
                if(todo.id === action.payload.id) todo.title = action.payload.title
            })
            console.log("Action : ", action);
        },

        completeTodo: (state, action) => {
            state.todos.filter((todo) => {
                if (todo.id === action.payload) todo.isCompleted = true
            })
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>  todo.id !== action.payload)
        }
    }   
})

export const {addTodo, completeTodo, updateTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer;