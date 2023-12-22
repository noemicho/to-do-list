import React from 'react'

import '../styles/App.css'

import Task from '../components/Task.jsx'

import { useState,useEffect } from 'react'

function App() {

  const [task, setTask] = useState('')

  return (
    <div className="App">
      <header className="App-header">
          <h1>your to do list</h1>
      </header>
      <div className='enter'>
          <input 
            className='input-enter' 
            type='text' 
            placeholder='write your task'
            value={task}
            onChange={(event) => {setTask(event.target.value)}}
            />
          <button className='button-enter' >add</button>
      </div>
      <div className='container'>
          <Task></Task>
      </div>
    </div>
  )
}

export default App
