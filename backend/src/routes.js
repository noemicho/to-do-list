import express from 'express'

import TaskController from '../src/controllers/TaskController.js'

const routes = express.Router()

//Task Routes
routes.post('/tasks', TaskController.create)
routes.get('/tasks', TaskController.read)
routes.delete('/tasks/:id', TaskController.deleteTask)
routes.patch('/tasks/:id', TaskController.updateTask)

export default routes