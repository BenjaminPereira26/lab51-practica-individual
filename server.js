const app = require('./app');
const PORT = process.env.PORT || 9999; // <-- Puerto incorrecto

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});