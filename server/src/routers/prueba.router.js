const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const router = Router();

const {
  getTask,
  getTaskById,
  postTask,
  updateTask,
  deleteTask
} = require('../controllers/prueba.controller.js');

router.get('/tasks', getTask);
router.get('/tasks/:id', getTaskById);
router.post('/tasks', [
  check('title').not().isEmpty().withMessage('Title is required'),
], postTask);
router.put('/tasks/:id', [
  check('title').optional().not().isEmpty().withMessage('Title is required if provided'),
], updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
