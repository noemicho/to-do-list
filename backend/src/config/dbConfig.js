//mongodb+srv://noemicho:<password>@cluster0.bynfaw4.mongodb.net/?retryWrites=true&w=majority

import mongoose from 'mongoose'

const dbConfig = 'mongodb+srv://noemicho:EQj9Regtb1pTE1vZ@cluster0.bynfaw4.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'
const dbName = "To-do-list"

const connection = mongoose
    .connect(
      dbConfig,
      {
        dbName: dbName
      }
      
      )
    .then(() => {
        console.log("Connected to MongoDB")
      })
      .catch((err) => {
        console.log("it didn't connect...")
        console.error("Connection error to MongoDB: ", err)
        process.exit()
      })

export default connection