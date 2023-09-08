const express = require('express');
const router = express.Router();
const todoController = require('../../controllers/todoController');

router.get('/', todoController.getAllTodos);
router.get('/:todoID', todoController.getOneTodo);
router.post('/', todoController.createTodo);
router.patch('/:todoID', todoController.updateTodo);
router.delete('/:todoID', todoController.deleteTodo);

module.exports = router;
