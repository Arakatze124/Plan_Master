const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:String,
    description: String,
    status: String,
    dueDate: Date,
    subTasks: []
})

module.exports = mongoose.model('Task', TaskSchema);