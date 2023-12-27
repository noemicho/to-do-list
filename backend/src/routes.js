import express from 'express'

import TaskController from '../src/controllers/TaskController.js'

const routes = express.Router()

//Task Routes
routes.post('/tasks', TaskController.create)
routes.get('/tasks', TaskController.read)

export default routes