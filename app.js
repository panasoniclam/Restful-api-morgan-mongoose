//Define Defendences
 
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

//contend
const app =express();


//set up morgan
app.use(logger('dev'));


//set up bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//Routes
app.get('/',(req,res,next)=>{
    //thnah cong => head number = 200,loi error, cath = 404, loi handle 500
    res.status(200).json({
        message:'you requested home page',
        
    });
});
//catch 404 Errors and forward them to error
app.use((req,res,next)=>{
    const err = new Error('not found');
    err.status = 404;
    next(err)
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