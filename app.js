//Define Defendences
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
//contend
const app =express();

// import file route
const project = require('./app/routers/project.router');
//connetc to db
mongoose.connect(
    'mongodb+srv://admin:'+process.env.PASSWD_MONGOOSE+'@cluster0-nh64w.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser:true
    }
)
//set up morgan
app.use(logger('dev'));


//set up bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//Routes
// app.get('/',(req,res,next)=>{
    // thnah cong => head number = 200,loi error, cath = 404, loi handle 500
//     res.status(200).json({
//         message:'you requested home page',
        
//     });
// });
// thuc hien tat ca cac code o trong cac file
app.use('/projects',project);
//catch 404 Errors and forward them to error
app.use((req,res,next)=>{
    const err = new Error('not found');
    err.status = 404;
    next(err);
});

// error handle funtion
app.use((req,res,next)=>{
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;
    //respond to client
    res.status(status).json({
        error:{
            message: error.message
        }
    })
})
//module export
module.exports = app;

