const Task = require('../models/task.js')

const getAllTasks = async(req,res)=>{
    try{
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    }catch(error){
        res.status(500).json({msg:error})
    }
    
    // res.send("In this page you will see your all tasks");
}

const createTask = async(req,res) =>{
    try{
        const task = await Task.create(req.body)
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
    
}

const getTask = async(req,res) =>{
    try{
        //We can also use findOne method in place of findById
        // const task = await Task.findOne({'_id':req.params.id});
        const task = await Task.findById(req.params.id);
        //Folowing error will return only when id will have same number of character
        if(!task)
        {
            return res.status(404).json({msg:`There is no any task with id ${req.params.id}`});
        }
        res.status(200).json({task})
    }catch(error){
        //Following error will return when we will dont have same number of characters in id
        res.status(500).json({msg:error})
    }

}

const updateTask =async(req,res)=>{
    try{
        const task = await Task.findOneAndUpdate({_id:req.params.id},req.body,{
            new:true,
            runValidators:true
        })

        if(!task)
        {
            res.status(404).json(`There is no any task manager with the id ${req.params.id}`)
        }
        res.status(200).json({task});

    }catch(error){
        res.status(500).json({"msg":error})
    }
    // res.send('Updating the task')
}

const deleteTask = async(req,res) =>{//We can also use FindOneAndDelete
    try{
        // const task = await Task.deleteOne({'_id':req.params.id})
        const task = await Task.findOneAndDelete({'_id':req.params.id})
        if(!task)
        {
            return res.status(404).json({task:`No Task was found with id ${req.params.id}`})
        }
        res.status(200).json({task});
    }catch(error){
        res.status(500).json({msg:error})
    }
    
}

module.exports={getAllTasks,createTask, getTask, updateTask, deleteTask}