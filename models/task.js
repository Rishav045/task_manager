const mongoose = require('mongoose')
 const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name should not be empty'],
        trim:true,
        maxlength:[20,'You have crossed maximum limit']

    } ,
    completed:{
        type:Boolean,
        default:false,
    },
 })

 module.exports = mongoose.model('Task',TaskSchema);