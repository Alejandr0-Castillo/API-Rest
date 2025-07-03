// Controladores para Tareas
const Tarea = require('../models/Tarea');
const Proyecto = require('../models/Proyecto');

exports.getTareas = async (req, res, next) => {
  try {
    const { proyectoId } = req.query;
    const query = { usuarioId: req.user.id };
    if (proyectoId) {
      query.proyectoId = proyectoId;
    }
    const tareas = await Tarea.find(query).populate('proyectoId');
    res.json(tareas);
  } catch (err) {
    next(err);
  }
};

exports.getTareaById = async (req, res, next) => {
  try {
    const tarea = await Tarea.findOne({ _id: req.params.id, usuarioId: req.user.id }).populate('proyectoId');
    if (!tarea) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json(tarea);
  } catch (err) {
    next(err);
  }
};

exports.createTarea = async (req, res, next) => {
  try {
    const { proyectoId } = req.body;
    const proyecto = await Proyecto.findOne({ _id: proyectoId, usuarioId: req.user.id });
    if (!proyecto) return res.status(404).json({ message: 'Proyecto no encontrado' });

    const tarea = new Tarea({ ...req.body, usuarioId: req.user.id });
    await tarea.save();
    res.status(201).json(tarea);
  } catch (err) {
    next(err);
  }
};

exports.updateTarea = async (req, res, next) => {
  try {
    const tarea = await Tarea.findOneAndUpdate({ _id: req.params.id, usuarioId: req.user.id }, req.body, { new: true });
    if (!tarea) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json(tarea);
  } catch (err) {
    next(err);
  }
};

exports.deleteTarea = async (req, res, next) => {
  try {
    const tarea = await Tarea.findOneAndDelete({ _id: req.params.id, usuarioId: req.user.id });
    if (!tarea) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json({ message: 'Tarea eliminada' });
  } catch (err) {
    next(err);
  }
};
