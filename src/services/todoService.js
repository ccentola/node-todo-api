const { v4: uuid } = require('uuid');
const Todo = require('../models/Todo');

const getAllTodos = () => {
  try {
    const allTodos = Todo.getAllTodos();
    return allTodos;
  } catch (error) {
    throw error;
  }
};
const getOneTodo = (todoID) => {
  try {
    const todo = Todo.getOneTodo(todoID);
    return todo;
  } catch (error) {
    throw error;
  }
};
const createTodo = (newTodo) => {
  const todoToInsert = {
    ...newTodo,
    id: uuid(),
    completed: false,
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  };
  try {
    const createdTodo = Todo.createOneTodo(todoToInsert);
    return createdTodo;
  } catch (error) {
    throw error;
  }
};
const updateTodo = (todoID, changes) => {
  try {
    const updatedTodo = Todo.updateOneTodo(todoID, changes);
    return updatedTodo;
  } catch (error) {
    throw error;
  }
};
const deleteTodo = (todoID) => {
  try {
    Todo.deleteOneTodo(todoID);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTodos,
  getOneTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
