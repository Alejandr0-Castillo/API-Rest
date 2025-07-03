const Joi = require('joi');

const tareaSchema = Joi.object({
  proyectoId: Joi.string().required(),
  descripcion: Joi.string().required(),
  completada: Joi.boolean().optional()
});

const updateTareaSchema = Joi.object({
  descripcion: Joi.string().optional(),
  completada: Joi.boolean().optional()
}).min(1);

module.exports = { tareaSchema, updateTareaSchema };
