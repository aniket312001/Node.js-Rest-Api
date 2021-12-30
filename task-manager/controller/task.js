const Task = require('../task-model')





const getAllTasks = (req,res)=>{
    Task.find((err,doc)=>{
        if(err){
            console.log(err)
        }
        else {
            res.send(doc)
        }
    })
}

const createTask =  (req,res)=>{
    let task = new Task({
        name:req.body.name,
        completed:req.body.completed
    })
    task.save((err,doc)=>{
        if(err){
            console.log(err)
        }
        else {
            res.send(doc)
        }
    })
}

const getTask =  (req,res)=>{
    Task.findById(req.params.id,(err,doc)=>{
        if(err){
            console.log(err)
        }
        else {
            res.send(doc)
        }
    })
}

const updateTask =  (req,res)=>{
    data ={
        name:req.body.name,
        completed:req.body.completed
    }
    Task.findByIdAndUpdate(req.params.id,{$set:data},(err,doc)=>{
        if(err){
            console.log("Error in updating in "+err)
        }
        else {
            res.send("Updated Successfully successfully")
        }
    })
}

const deleteTask =  (req,res)=>{
    Task.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(err){
            console.log(err)
        }
        else {
            res.send("Deleted Successfully")
        }
    })
}

module.exports ={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}