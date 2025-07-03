// Rutas para Tareas
const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const { tareaSchema, updateTareaSchema } = require('../validators/tareaValidator');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');

router.get('/', auth, tareaController.getTareas);
router.get('/:id', auth, tareaController.getTareaById);
router.post('/', auth, validate(tareaSchema), tareaController.createTarea);
router.put('/:id', auth, validate(updateTareaSchema), tareaController.updateTarea);
router.delete('/:id', auth, tareaController.deleteTarea);

module.exports = router;
