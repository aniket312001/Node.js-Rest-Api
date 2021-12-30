const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/task-manager',err=>{
    if(!err){
        console.log("DB Connected")
    }
    else {
        console.log(err)
    }
})

module.exports = mongoose