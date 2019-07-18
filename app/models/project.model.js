const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new  Schema({
    nameProject:String,
    authorProject:String,
    tasks:[{
        type:Schema.Types.ObjectId,
    
    }]

})

const project = mongoose.model('project',projectSchema);
module.exports = project