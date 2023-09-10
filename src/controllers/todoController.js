const todoService = require('../services/todoService');

const getAllTodos = (req, res) => {
  try {
    const allTodos = todoService.getAllTodos();
    res.send({ status: 'OK', data: allTodos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const getOneTodo = (req, res) => {
  const {
    params: { todoID },
  } = req;
  if (!todoID) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':todoID' can not be empty" },
    });
  }
  try {
    const todo = todoService.getOneTodo(todoID);
    res.send({ status: 'OK', data: todo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const createTodo = (req, res) => {
  // destructure body from request
  const { body } = req;
  // check if body contains a title
  if (!body.title) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error: "'Title' is missing or is empty in request body",
      },
    });
  }
  // create new todo object with title from body
  // and default false for completed
  const newTodo = {
    title: body.title,
  };
  try {
    const createdTodo = todoService.createTodo(newTodo);
    res.status(201).send({ status: 'OK', data: createdTodo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const updateTodo = (req, res) => {
  const {
    body,
    params: { todoID },
  } = req;
  if (!todoID) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':todoID' can not be empty" },
    });
  }
  try {
    const updatedTodo = todoService.updateTodo(todoID, body);
    res.send({ status: 'OK', data: updatedTodo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const deleteTodo = (req, res) => {
  const {
    params: { todoID },
  } = req;
  if (!todoID) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':todoID' can not be empty" },
    });
  }
  try {
    todoService.deleteTodo(todoID);
    res.status(204).send({ status: 'OK' });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllTodos,
  getOneTodo,
  updateTodo,
  createTodo,
  deleteTodo,
};
