const express = require('express')
const app = express()

const port = 3000

const task = require('./routes/task')

const mongoose = require('./db')

 
//middleware
app.use(express.json())

//route 
app.get('/',(req,res)=>{
    res.send("hello world")
})


app.use('/api/v1/tasks',task)


app.listen(port,console.log(`Server is listening on port http://localhost:${port}...`))