var mongoose = require('mongoose');
var TaskSchema = new mongoose.Schema({
    name: String,
    description: String,
    status: String,
    dueDate: Date,
    subTasks: []
});
module.exports = mongoose.model('Task', TaskSchema);
