const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/store',err=>{
    if(!err){
        console.log("DB is connected Successfully..")
    }
    else {
        console.log(err)
    }
})


module.exports = mongoose