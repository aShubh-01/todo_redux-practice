import { useState } from 'react'
import AddTodo from './components/AddTodo'
import TodosList from './components/TodosList'
import './App.css'

function App() {

  return (
      <>
        <div style={{ margin: '10px', marginTop: '20px'}}>
          <div style={{
              margin: '10px'
          }}>
            <AddTodo />
          </div>
          <div style={{
            margin: '10px'
          }}>
            <h2>Your Todos</h2>
            <TodosList />
          </div>
        </div>
      </>
  )
}

export default App
