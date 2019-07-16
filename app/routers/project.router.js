//import denfendences
const express = require('express');
const router = express.Router();
const ProjectsController = require('../controllers/project.controller');
//contend

router.route('/')
    .get((req,res)=>{
        res.status(200).json({
            message:'youe request index page design'
        })
    })
    // .get(ProjectsController.index)
    // .post(ProjectsController.newProject);
//export module
module.exports = router;
