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
    return response.status(401).json({error: "couldn't find this id"})
}

export default {create, read, deleteTask}