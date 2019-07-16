const express = require('express');
// const app =express();
// const route = express.Router();

// app.use('/user/:id',(req,res,next)=>{
//     console.log("requested type",req.method);
//     next()
// });
// app.use('/user',(req,res,next)=>{
//     res.send('USER');
// })

// app.use((req,res,next)=>{ 
//     console.log('date',Date.now());
//     next();
// })

// app.use('/admin/:id',(req,res,next)=>{
//     console.log("request type",req.method);
    
// },(req,res,next)=>{
//     console.log("requested params",req.params.id);
// });

// app.get('/admin/:id',(req,res,next)=>{
//     console.log('request params',req.params.id)
// })


// app.use('/admin/:id',(req,res,next)=>{
//     console.log('param',req.params.id);
// })


// app.get('/admin/:1',(req,res,next)=>{
//     console.log("requested url",req.originalUrl);
//     next();
// },(req,res,next)=>{
//     console.log('request type',req.method)
//     next();
// })
// app.use('/user/:id',(req,res,next)=>{
//     console.log("request url",req.method)
//     next();

// },(req,res,next)=>{
//     console.log("requested type",req.params.id)
//     res.send(req.params.id);
//     next();
// })

// app.get('/user/:id',(req,res,next)=>{
//     if(req.params.id==0)  next('route')
//     else next();
// },(req,res,next)=>{
//     res.send('reguler');
// })

// app.use('/user',route);
// route.get('/user',(req,res,next)=>{
//     // res.send("almnn");
//     // console.log(req.body)
//     res.send('fffffff');
// })
// route.get('user/:id',(req,res,next)=>{
//     if(req.params.id==0) console.log(req.params.id);
//     else next();
// })



const app = require('./app');
// mongoose.connect(mongoDB,{useNewUrlParser:true});
// const db = mongoose.connection;
// db.on('error',console.error.bind())
const server = require('http').Server(app);
server.listen(4000)
