import React from "react"

import '../styles/Task.css'

import api from "../api.js"

function Task({data}){

    
    return(
        <div className="Task">
            <textarea maxLength={40} disabled='disabled' className="task-p">{data.name}</textarea>
            <button onClick='' className="task-button">delete</button>
        </div>
    )
}

export default Task