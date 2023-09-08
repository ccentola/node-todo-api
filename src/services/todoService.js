const { v4: uuid } = require('uuid');
const Todo = require('../models/Todo');

const getAllTodos = () => {
  const allTodos = Todo.getAllTodos();
  return allTodos;
};
const getOneTodo = (todoID) => {
  const todo = Todo.getOneTodo(todoID);
  return todo;
};
const createTodo = (newTodo) => {
  const todoToInsert = {
    ...newTodo,
    id: uuid(),
    completed: false,
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  };

  const createdTodo = Todo.createOneTodo(todoToInsert);
  return createdTodo;
};
const updateTodo = (todoID, changes) => {
  const updatedTodo = Todo.updateOneTodo(todoID, changes);
  return updatedTodo;
};
const deleteTodo = (todoID) => {
  Todo.deleteOneTodo(todoID);
};

module.exports = {
  getAllTodos,
  getOneTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
