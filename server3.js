const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/team', (req, res) => {
    const filePath = path.join(__dirname, 'server3-files', 'team.html');
    res.sendFile(filePath);
});
app.get('/about', (req, res) => {
    const filePath = path.join(__dirname, 'server3-files', 'about.html');
    res.sendFile(filePath);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});

app.use((req, res, next) => {
    res.status(404).send('No he encontrado lo que buscabas...')
});