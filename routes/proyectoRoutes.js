// Rutas para Proyectos
const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const { proyectoSchema } = require('../validators/proyectoValidator');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');

router.get('/', auth, proyectoController.getProyectos);
router.get('/:id', auth, proyectoController.getProyectoById);
router.post('/', auth, validate(proyectoSchema), proyectoController.createProyecto);
router.put('/:id', auth, validate(proyectoSchema), proyectoController.updateProyecto);
router.delete('/:id', auth, proyectoController.deleteProyecto);

module.exports = router;
