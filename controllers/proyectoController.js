// Controladores para Proyectos
const Proyecto = require('../models/Proyecto');

exports.getProyectos = async (req, res, next) => {
  try {
    const proyectos = await Proyecto.find({ usuarioId: req.user.id });
    res.json(proyectos);
  } catch (err) {
    next(err);
  }
};

exports.getProyectoById = async (req, res, next) => {
  try {
    const proyecto = await Proyecto.findOne({ _id: req.params.id, usuarioId: req.user.id });
    if (!proyecto) return res.status(404).json({ message: 'Proyecto no encontrado' });
    res.json(proyecto);
  } catch (err) {
    next(err);
  }
};

exports.createProyecto = async (req, res, next) => {
  try {
    const proyecto = new Proyecto({ ...req.body, usuarioId: req.user.id });
    await proyecto.save();
    res.status(201).json(proyecto);
  } catch (err) {
    next(err);
  }
};

exports.updateProyecto = async (req, res, next) => {
  try {
    const proyecto = await Proyecto.findOneAndUpdate({ _id: req.params.id, usuarioId: req.user.id }, req.body, { new: true });
    if (!proyecto) return res.status(404).json({ message: 'Proyecto no encontrado' });
    res.json(proyecto);
  } catch (err) {
    next(err);
  }
};

exports.deleteProyecto = async (req, res, next) => {
  try {
    const proyecto = await Proyecto.findOneAndDelete({ _id: req.params.id, usuarioId: req.user.id });
    if (!proyecto) return res.status(404).json({ message: 'Proyecto no encontrado' });
    // Opcional: eliminar tareas asociadas
    res.json({ message: 'Proyecto eliminado' });
  } catch (err) {
    next(err);
  }
};
