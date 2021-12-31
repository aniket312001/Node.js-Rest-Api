const express = require('express')
const app = express()
const port = 3000
const mongoose = require('./db')

const product = require('./routes/product')

app.use(express.json())
app.use('/products',product)




app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(port,console.log(`Server is running on http://localhost:${port}`))

