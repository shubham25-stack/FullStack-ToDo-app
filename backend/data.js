//creating the schema for database and data storage
const mongoose = require('mongoose');

mongoose.connect("#connection string"); //enter here the connection string of mongoDB.
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed:Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
} 
