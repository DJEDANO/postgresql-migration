const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// GET all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// GET task by id
router.get('/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

// POST create task
router.post('/', async (req, res) => {
  const { title } = req.body;
  const task = await Task.create({ title });
  res.status(201).json(task);
});

// PUT update task
router.put('/:id', async (req, res) => {
  const { title, completed } = req.body;
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  task.title = title !== undefined ? title : task.title;
  task.completed = completed !== undefined ? completed : task.completed;
  await task.save();
  res.json(task);
});

// DELETE task
router.delete('/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  await task.destroy();
  res.json({ message: 'Task deleted' });
});

module.exports = router;
