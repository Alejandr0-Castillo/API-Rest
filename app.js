require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const proyectoRoutes = require('./routes/proyectoRoutes');
const tareaRoutes = require('./routes/tareaRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
connectDB();

app.use(cors());
app.use(helmet());
app.use(express.json());

console.log("Montando rutas...");
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/proyectos', proyectoRoutes);
app.use('/api/v1/tareas', tareaRoutes);

app.get('/', (req, res) => res.send('¡API funcionando!'));
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
