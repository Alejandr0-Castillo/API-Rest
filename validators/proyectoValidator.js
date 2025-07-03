// Validadores para Proyectos usando Joi
const Joi = require('joi');

const proyectoSchema = Joi.object({
  nombre: Joi.string().required(),
  descripcion: Joi.string().optional()
});

module.exports = { proyectoSchema };
