'use strict';

const express = require('express');
const versionControl = require('./app');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/version', (req, res) => {
    const { fileName, content } = req.body;
    versionControl.addVersion(fileName, content);
    res.status(201).send('Version hinzugefügt.');
});

app.get('/versions', (req, res) => {
    res.json(versionControl.listVersions());
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
