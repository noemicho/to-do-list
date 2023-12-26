import React from "react"

import '../styles/Task.css'

function Task(){
    return(
        <div className="Task">
            <textarea maxLength={40} disabled='disabled' className="task-p">task name</textarea>
            <button className="task-button">delete</button>
        </div>
    )
}

export default Task