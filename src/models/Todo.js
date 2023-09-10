const DB = require('./db.json');
const { saveToDatabase } = require('../models/utils');

const getAllTodos = () => {
  try {
    return DB.todos;
  } catch (error) {
    throw { status: 500, message: error };
  }
};
const createOneTodo = (newTodo) => {
  // push new todo to existing todos
  try {
    DB.todos.push(newTodo);
    saveToDatabase(DB);
    return newTodo;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneTodo = (todoID) => {
  try {
    const todo = DB.todos.find((todo) => todo.id === todoID);
    if (!todo) {
      throw {
        status: 400,
        message: `Can't find todo with the id '${todoID}'`,
      };
    }
    return todo;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateOneTodo = (todoID, changes) => {
  try {
    const indexForUpdate = DB.todos.findIndex((todo) => todo.id === todoID);
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find todo with the id '${todoID}'`,
      };
    }
    const updatedTodo = {
      ...DB.todos[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    };
    DB.todos[indexForUpdate] = updatedTodo;
    saveToDatabase(DB);
    return updatedTodo;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneTodo = (todoID) => {
  try {
    const indexForDeletion = DB.todos.findIndex((todo) => todo.id === todoID);
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find todo with the id '${todoID}'`,
      };
    }
    DB.todos.splice(indexForDeletion, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllTodos,
  createOneTodo,
  getOneTodo,
  updateOneTodo,
  deleteOneTodo,
};
