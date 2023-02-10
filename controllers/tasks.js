const Task = require('../models/task.js')
const asyncWrapper= require('../middleware/async.js')

const getAllTasks = asyncWrapper(async(req,res)=>{
    
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    // res.send("In this page you will see your all tasks");
})

const createTask = asyncWrapper(async(req,res) =>{
 
        const task = await Task.create(req.body)
        res.status(200).json({task})
    
    
})

const getTask = asyncWrapper(async(req,res) =>{
    
        //We can also use findOne method in place of findById
        // const task = await Task.findOne({'_id':req.params.id});
        const task = await Task.findById(req.params.id);
        //Folowing error will return only when id will have same number of character
        if(!task)
        {
            return res.status(404).json({msg:`There is no any task with id ${req.params.id}`});
        }
        res.status(200).json({task})
   
})

const updateTask =asyncWrapper(async(req,res)=>{
        const task = await Task.findOneAndUpdate({_id:req.params.id},req.body,{
            new:true,
            runValidators:true
        })

        if(!task)
        {
            res.status(404).json(`There is no any task manager with the id ${req.params.id}`)
        }
        res.status(200).json({task});
})

const deleteTask = asyncWrapper(async(req,res) =>{//We can also use FindOneAndDelete
 
        // const task = await Task.deleteOne({'_id':req.params.id})
        const task = await Task.findOneAndDelete({'_id':req.params.id})
        if(!task)
        {
            return res.status(404).json({task:`No Task was found with id ${req.params.id}`})
        }
        res.status(200).json({task});
    
})

module.exports={getAllTasks,createTask, getTask, updateTask, deleteTask}