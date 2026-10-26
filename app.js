const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello DevOps! v1'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

module.exports = app;