const mongoose = require("mongoose");

const todo = new mongoose.Schema({
    task:String,
    completed:Boolean
});

const Todo = mongoose.model("Todo" , todo);

module.exports = Todo;