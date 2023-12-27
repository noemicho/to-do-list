import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema({
    name: String
})

export default mongoose.model('Task', TaskSchema)