import { response } from "express"
import TaskSchema from "../models/TaskSchema.js"

async function create(request, response){
    const {name} = request.body

    if(!name){
        return response.status(400).json({error:'enter a task'})
    }
    
    const taskCreated = await TaskSchema.create({
        name,
    })

    return response.json(taskCreated)
}

async function read(request, response) {
    const taskList = await TaskSchema.find()

    return response.json(taskList)
} 

async function deleteTask(request, response){
    const {id} = request.params
   
    const taskDeleted = await TaskSchema.findOneAndDelete({_id: id})

    if(taskDeleted){
        return response.json(taskDeleted)
    }
    return response.status(401).json({error: "couldn't find this id to delete"})
}

async function updateTask(request, response){
    const {id} = request.params
    const {name} = request.body

    const task = await TaskSchema.findOne({_id: id})

    if(task.name){
        task.name = name
        await task.save()
    }
    return response.json(task)
    
}

export default {create, read, deleteTask, updateTask}