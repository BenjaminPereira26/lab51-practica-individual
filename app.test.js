const request = require('supertest');
const app = require('./app');

describe('CRUD de Tareas', () => {
  test('GET /tasks debe retornar un array', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /tasks debe crear una nueva tarea', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Nueva tarea de prueba' });
    
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Nueva tarea de prueba');
  });

  test('GET /tasks/:id debe retornar 404 si no existe', async () => {
    const res = await request(app).get('/tasks/9999');
    expect(res.statusCode).toBe(404);
  });

  test('PUT /tasks/:id debe actualizar una tarea', async () => {
    const res = await request(app)
      .put('/tasks/1')
      .send({ title: 'Tarea actualizada', completed: true });
    
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Tarea actualizada');
    expect(res.body.completed).toBe(true);
  });

  test('DELETE /tasks/:id debe eliminar una tarea', async () => {
    const res = await request(app).delete('/tasks/1');
    expect(res.statusCode).toBe(204);
  });
});