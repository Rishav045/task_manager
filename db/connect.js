const mongoose = require('mongoose')



const connectDB= (url) =>{
   return mongoose.connect(url,{
        //These are the things added from the video in order to avoid text or depreciation
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true
    
    })
}

module.exports=connectDB;
        // .then(()=>{console.log('Connected to the database .....');})
        // .catch((err)=>{console.log(err);})
