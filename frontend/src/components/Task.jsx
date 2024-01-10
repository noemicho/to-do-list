import React from "react"

import '../styles/Task.css'

import api from "../api.js"

function Task({data}){
    async function handleDelete(){
        try{
            const {_id} = data
            if(_id){
                const response = await api.delete(`/tasks/${_id}`)
                console.log('task deleted')
                setInterval(function() {
                    window.location.reload()
                  }, 10)
                
            }else{
                console.log("couldn'it find task to delete")
            }
        }
        catch(error){
            console.error('erro ao excluir o celular:', error)
        }
        
    }
    
    return(
        <div className="Task">
            <textarea maxLength={40} disabled='disabled' className="task-p">{data.name}</textarea>
            <button onClick={handleDelete} className="task-button">delete</button>
        </div>
    )
}

export default Task