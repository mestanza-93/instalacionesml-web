const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.send('Instalaciones ML');
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server listening on port ${PORT}');
});