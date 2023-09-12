const { v4: uuid } = require('uuid');
const Todo = require('../models/Todo');

const getAllTodos = async () => {
  try {
    const allTodos = await Todo.getAllTodos();
    //
    return allTodos;
  } catch (error) {
    throw error;
  }
};
const getOneTodo = async (todoId) => {
  try {
    const todo = await Todo.getOneTodo(todoId);

    return todo;
  } catch (error) {
    throw error;
  }
};
const createTodo = async (newTodo) => {
  const todoToInsert = {
    ...newTodo,
  };
  try {
    const createdTodo = await Todo.createOneTodo(todoToInsert);
    return createdTodo;
  } catch (error) {
    throw error;
  }
};
const updateTodo = async (todoId, changes) => {
  try {
    const updatedTodo = await Todo.updateOneTodo(todoId, changes);
    return updatedTodo;
  } catch (error) {
    throw error;
  }
};
const deleteTodo = async (todoId) => {
  try {
    await Todo.deleteOneTodo(todoId);
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
