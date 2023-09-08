const DB = require('./db.json');
const { saveToDatabase } = require('../models/utils');

const getAllTodos = () => {
  return DB.todos;
};
const createOneTodo = (newTodo) => {
  // push new todo to existing todos
  DB.todos.push(newTodo);
  saveToDatabase(DB);
  return newTodo;
};

const getOneTodo = (todoID) => {
  const todo = DB.todos.find((todo) => todo.id === todoID);
  if (!todo) {
    return;
  }
  return todo;
};

const updateOneTodo = (todoID, changes) => {
  const indexForUpdate = DB.todos.findIndex((todo) => todo.id === todoID);
  if (indexForUpdate === -1) {
    return;
  }
  const updatedTodo = {
    ...DB.todos[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  };
  DB.todos[indexForUpdate] = updatedTodo;
  saveToDatabase(DB);
  return updatedTodo;
};

const deleteOneTodo = (todoID) => {
  const indexForDeletion = DB.todos.findIndex((todo) => todo.id === todoID);
  if (indexForDeletion === -1) {
    return;
  }
  DB.todos.splice(indexForDeletion, 1);
  saveToDatabase(DB);
};

module.exports = {
  getAllTodos,
  createOneTodo,
  getOneTodo,
  updateOneTodo,
  deleteOneTodo,
};
