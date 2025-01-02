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

router.get('/api/tasks', getTask);
router.get('/api/tasks/:id', getTaskById);
router.post('/api/tasks', [
  check('title').not().isEmpty().withMessage('Title is required'),
], postTask);
router.put('/api/tasks/:id', [
  check('title').optional().not().isEmpty().withMessage('Title is required if provided'),
], updateTask);
router.delete('/api/tasks/:id', deleteTask);

module.exports = router;
