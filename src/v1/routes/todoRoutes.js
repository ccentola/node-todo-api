const express = require('express');
const router = express.Router();
const todoController = require('../../controllers/todoController');

router.get('/', todoController.getAllTodos);
router.get('/:todoId', todoController.getOneTodo);
router.post('/', todoController.createTodo);
router.patch('/:todoId', todoController.updateTodo);
router.delete('/:todoId', todoController.deleteTodo);

module.exports = router;
