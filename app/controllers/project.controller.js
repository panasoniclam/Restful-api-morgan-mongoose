const Project = require('../models/project.model')
module.exports = {
    index:(req,res,next)=>{
        // res.status(200).json({
        //     message:'you requested controller'
        // })
        Project.find({})
            .then(projects=>{
                console.log(projects);
                res.status(200).json(projects)
            })
            .catch(err=>{
                next(err)
            })
    },
    newProject:(req,res,next)=>{
        const newProject = new Project(req.body);
        newProject.save()
            .then(project=>{
                res.status(201).json(project);
                console.log(project)
            })
            .catch(err =>{
                next(err)
            })
    }
}