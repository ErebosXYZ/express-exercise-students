const fs = require('fs');
const express = require('express');
const path = require('path');
const isPalindrome = require('is-palindrome-string');


const app = express();
const PORT = 3000;


app.use(express.json());

app.get('/check', (req, res) => {
    const palabra = req.query.palabra;
    console.log(palabra);
    if (isPalindrome(palabra) === true) {
        res.send("Es un palíndromo.");
    } else {
        res.send("NO es un palíndromo.");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});

app.use((req, res, next) => {
    res.status(404).send('No he encontrado lo que buscabas...');
});