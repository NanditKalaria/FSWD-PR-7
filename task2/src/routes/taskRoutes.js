const express = require('express');
const { getAllTasks, createTask, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.route('/tasks')
    .get(getAllTasks)
    .post(createTask);

router.route('/tasks/:id')
    .get(getTaskById)
    .put(updateTask)
    .delete(deleteTask);

module.exports = router;