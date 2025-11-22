 const express = require('express');
 const mongoose = require('mongoose');

 require('dotenv').config();

 const app = express();

 app.use(express.json());

//  route to check api condtion 
 app.get('/api/health',(req,res)=>{
    res.json({
        ok:true
    });
 });

 const start = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/insighthub');
        app.listen(5000,()=>{
            console.log("Server is running on port: 5000" );  
        })
    } catch (error) {
        console.error("Startup error : ", error);
        process.exit(-1);   
    }
 };

 start();
