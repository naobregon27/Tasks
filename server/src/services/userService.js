const Task = require('../models/Tareas');

// Función para obtener todas las tareas
const getTask = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    throw new Error("Error al obtener las tareas: " + error.message);
  }
};

// Función para obtener una tarea por su ID
const getTaskById = async (id) => {
  try {
    const task = await Task.findById(id);
    if (!task) {
      throw new Error("Tarea no encontrada");
    }
    return task;
  } catch (error) {
    throw new Error("Error al obtener la tarea: " + error.message);
  }
};

// Función para obtener tareas por estado
const getTasksByStatus = async (completed) => {
  try {
    const tasks = await Task.find({ completed });
    return tasks;
  } catch (error) {
    throw new Error("Error al obtener las tareas: " + error.message);
  }
};

// Función para crear una nueva tarea
const createTask = async ({ title, description }) => {
  if (!title) {
    throw new Error("Title is required");
  }

  const task = new Task({
    title,
    description,
  });

  try {
    const savedTask = await task.save();
    return savedTask;
  } catch (error) {
    throw new Error("Error al crear la tarea: " + error.message);
  }
};

// Función para actualizar una tarea
const updateTask = async (id, updates) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedTask) {
      throw new Error("Tarea no encontrada");
    }
    return updatedTask;
  } catch (error) {
    throw new Error("Error al actualizar la tarea: " + error.message);
  }
};

// Función para eliminar una tarea
const deleteTask = async (id) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      throw new Error("Tarea no encontrada");
    }
    return deletedTask;
  } catch (error) {
    throw new Error("Error al eliminar la tarea: " + error.message);
  }
};

module.exports = {
  getTask,
  getTaskById,
  getTasksByStatus,
  createTask,
  updateTask,
  deleteTask,
};
