const express = require('express');
const app = express();
const variableQueNoSeUsa = 'Esto va a romper el CI a proposito';
app.use(express.json());

// Base de datos en memoria
let tasks = [
  { id: 1, title: 'Aprender GitHub Actions', completed: false }
];

// 1. Leer todas las tareas
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

// 2. Leer una tarea por ID
app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.status(200).json(task);
});

// 3. Crear una tarea
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'El título es requerido' });
  
  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// 4. Actualizar una tarea
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });

  task.title = req.body.title || task.title;
  task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;
  
  res.status(200).json(task);
});

// 5. Eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Tarea no encontrada' });
  
  tasks.splice(index, 1);
  res.status(204).send();
});

module.exports = app;