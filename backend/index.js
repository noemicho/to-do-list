const express = require('express')
const app = express()
const port = 3333

app.use(express.json())

app.listen(port, () => {
    console.log(`backend inicializado e escutando a porta ${port}`)
})