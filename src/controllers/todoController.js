const todoService = require('../services/todoService');

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await todoService.getAllTodos();
    res.send({ status: 'OK', data: allTodos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const getOneTodo = async (req, res) => {
  const {
    params: { todoId },
  } = req;
  if (!todoId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':todoId' can not be empty" },
    });
  }
  try {
    const todo = await todoService.getOneTodo(todoId);

    res.send({ status: 'OK', data: todo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const createTodo = async (req, res) => {
  // destructure body from request
  const { body } = req;
  // check if body contains a title
  if (!body.title || !body.user_id) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error: "'title' or 'user_id' is missing or is empty in request body",
      },
    });
  }
  // create new todo object with title from body
  // and default false for completed
  const newTodo = {
    title: body.title,
    user_id: body.user_id,
  };
  try {
    const createdTodo = await todoService.createTodo(newTodo);
    res.status(201).send({ status: 'OK', data: createdTodo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const updateTodo = async (req, res) => {
  const {
    body,
    params: { todoId },
  } = req;
  if (!todoId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':todoId' can not be empty" },
    });
  }
  try {
    const updatedTodo = await todoService.updateTodo(todoId, body);
    res.send({ status: 'OK', data: updatedTodo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const deleteTodo = async (req, res) => {
  const {
    params: { todoId },
  } = req;
  if (!todoId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':todoId' can not be empty" },
    });
  }
  try {
    await todoService.deleteTodo(todoId);
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
