const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Tutorial Devops j3j0'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
