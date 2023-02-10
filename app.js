
const express = require('express');
const tasks = require('./routes/tasks.js')
const connectDB = require('../starter/db/connect.js')
const cors = require('cors');
// Remember this
require('dotenv').config()

const app = express();

const port = 3000;

//Middleware
app.use(cors({
    origin:'*'
}))
app.use(express.static('./public'))
app.use(express.json());
app.use('/api/v1/tasks',tasks);

app.use('',(req,res)=>{
    // console.log('Page not found')
    res.send('Page not found')
})

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is running on ${port} port...`));
    } catch (error) {
        console.log(error);
    }
}
start()



