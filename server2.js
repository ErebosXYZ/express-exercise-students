const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/mensaje', (req, res) => {
    res.send(`<h1>El servidor funciona correctamente</h1>
         <p>Hola</p>`)
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
app.use((req, res, next) => {
  res.status(404).send('No he encontrado lo que buscabas...')
});