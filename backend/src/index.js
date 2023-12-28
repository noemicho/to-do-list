import express from 'express'
const app = express()
const port = 3333

import routes from '../src/routes.js'
import '../src/config/dbConfig.js'

app.use(express.json())
app.use(routes)
import cors from 'cors'

app.use(cors({
  origin: 'http://localhost:3000'
}))


app.listen(port, () => {
    console.log(`Backend listening to port ${port}`)
})