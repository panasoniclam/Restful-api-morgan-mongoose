const express = require('express');
const route = express.Router();
const Project = require('../controllers/project.controller')
route.route('/')
   .get(Project.index)
   .post(Project.newProject);


module.exports = route;