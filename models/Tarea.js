const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
  proyectoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Proyecto', required: true },
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  descripcion: { type: String, required: true },
  completada: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Tarea', tareaSchema);
