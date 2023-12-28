import React from 'react'

import '../styles/App.css'

import Task from '../components/Task.jsx'

import api from '../api.js'

import { useState, useEffect } from 'react'

function App() {

  const [task, setTask] = useState('')
  const [allTasks, setAllTasks] = useState([])

  useEffect(() => {
    async function getAllTasks(){
      const response = []
      try{
        response = await api.get('/tasks')
      }
      catch(error) {

        console.log(JSON.stringify(error))
      }
      setTask(response.data)
  }
  getAllTasks()

  }, [])

 
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
         {allTasks.map(data =>(<Task key={data._id} data={data}/>))}
      </div>
    </div>
  )
}

export default App
