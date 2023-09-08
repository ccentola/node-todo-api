const todoService = require('../services/todoService');

const getAllTodos = (req, res) => {
  const allTodos = todoService.getAllTodos();
  res.send({ status: 'OK', data: allTodos });
};
const getOneTodo = (req, res) => {
  const {
    params: { todoID },
  } = req;
  if (!todoID) {
    return;
  }
  const todo = todoService.getOneTodo(todoID);
  res.send({ status: 'OK', data: todo });
};
const createTodo = (req, res) => {
  // destructure body from request
  const { body } = req;
  // check if body contains a title
  if (!body.title) {
    return;
  }
  // create new todo object with title from body
  // and default false for completed
  const newTodo = {
    title: body.title,
  };
  const createdTodo = todoService.createTodo(newTodo);
  res.status(201).send({ status: 'OK', data: createdTodo });
};
const updateTodo = (req, res) => {
  const {
    body,
    params: { todoID },
  } = req;
  if (!todoID) {
    return;
  }
  const updatedTodo = todoService.updateTodo(todoID, body);
  res.send({ status: 'OK', data: updatedTodo });
};
const deleteTodo = (req, res) => {
  const {
    params: { todoID },
  } = req;
  if (!todoID) {
    return;
  }
  todoService.deleteTodo(todoID);
  res.status(204).send({ status: 'OK' });
};

module.exports = {
  getAllTodos,
  getOneTodo,
  updateTodo,
  createTodo,
  deleteTodo,
};
