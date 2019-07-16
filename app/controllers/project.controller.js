const Project = require('../models/project.model');
module.exports = {

    index:(req,res,next)=>{
        // res.status(200).json({
        //     message:'you requested index projecct page'
        // })
        Project.find({})
        .then(project=>{
            console.log(project);
            res.status(200).json(project);
        })
        .catch(err=>{
            next(err)
        })
    },
    newProject :(req,res,next)=>{
            const newProject = new Project(req.body);
            newProject.save()
                .then(project =>{
                    console.log(project)
                    // res.status(201).json(project);
                })
                .catch(err=>{
                        next(err) 
                })
    }
}