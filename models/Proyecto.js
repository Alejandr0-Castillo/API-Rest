// Modelo de Proyecto
const mongoose = require('mongoose');

const proyectoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Proyecto', proyectoSchema);
