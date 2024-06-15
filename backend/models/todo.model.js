const mongoose = require('mongoose')


const TodoModel = new mongoose.Schema({
    toDo: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Todo', TodoModel)