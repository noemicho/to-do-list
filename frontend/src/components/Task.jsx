import React from "react"

import '../styles/Task.css'

import api from "../api.js"

import { useState,useEffect } from "react"

function Task({data}){
    const [status, setStatus] = useState(false)
    function reloadPage(){
        window.location.reload()
    }

    useEffect(() => {
        async function verificate(){
            if(reloadPage){
                console.log('recarregou')
                if(status==false){
                    
                }
            }
        }
        verificate()
    }, [])

    async function handleDelete(){
        try{
            const {_id} = data
            if(_id){
                const response = await api.delete(`/tasks/${_id}`)
                console.log('task deleted')
                setInterval(function() {
                    reloadPage()
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
            <input
            type="checkbox" 
            value={status}
            onChange={(event) => {setStatus(event.target.value)}}
            />
            <textarea maxLength={40} disabled='disabled' className="task-p">{data.name}</textarea>
            <button onClick={handleDelete} className="task-button">delete</button>
        </div>
    )
}

export default Task