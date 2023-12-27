import express from 'express'
const app = express()
const port = 3333

import routes from '../src/routes.js'

app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`backend inicializado e escutando a porta ${port}`)
})