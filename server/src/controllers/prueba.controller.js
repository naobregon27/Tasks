const userService = require('../services/userService.js');
const { validationResult } = require('express-validator');

const getTask = async (req, res) => {
  try {
    const { status } = req.query; // Obtener el estado de la consulta
    let tasks;
    if (status) {
      const completed = status === 'completed';
      tasks = await userService.getTasksByStatus(completed);
    } else {
      tasks = await userService.getTask();
    }
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await userService.getTaskById(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const postTask = async (req, res) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() }); 
        }

  const { title, description } = req.body;
  try {
    const newTask = await userService.createTask({ title, description });
    res.status(201).json({ newTask });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedTask = await userService.updateTask(id, updates);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await userService.deleteTask(id);
    res.status(200).json(deletedTask);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getTask,
  getTaskById,
  postTask,
  updateTask,
  deleteTask,
};
