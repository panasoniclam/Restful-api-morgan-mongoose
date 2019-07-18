//defendences
const express = require('express');
const logger = require('morgan')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
//contend
const app = express();
//set ip bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//set up morgan
app.use(logger('dev'));
//set up database
mongoose.connect(

    'mongodb+srv://admin:'+process.env.PASS+'@cluster0-nh64w.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser:true
    }
)
//route
// app.get('/',(req,res,next)=>{
//     res.status(200).json({
//         message:'you requested '
//     })
// });
const project = require('./app/route/project.route');
app.use('/projects',project);
//catch 404 error or forward to them error
app.use((req,res,next)=>{
    const err = new Error('not found');
    err.status = 404
    next(err);
});
//err handle function
app.use((req,res,next)=>{
    const error = app.get('env') ==='development' ? err : {} ;
    const status = err.status || 500;
    res.status(status).json({
        message:error.message
    })
})
//export module
module.exports = app;