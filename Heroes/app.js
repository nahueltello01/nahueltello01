const express = require (`express`);

const path = require (`path`);

const app = express ();

const PORT = 3030;

//rutas

app.get (`/`, (req, res) => {
    return res.sendFile (path.join (__dirname, `views`, `index.html`))
});

app.get (`/home`, (req, res) => {
    return res.sendFile (path.join (__dirname, `views`, `index.html`))
});

app.get (`/babbage`, (req, res) => {
    return res.sendFile (path.join (__dirname, `views`, `babbage.html`))
});

app.get (`/berners-lee`, (req, res) => {
    return res.sendFile (path.join (__dirname, `views`, `berners-lee.html`))
});

app.get (`/clarke`, (req, res) => {
    return res.sendFile (path.join (__dirname, `views`, `clarke.html`))
});

app.get (`/lovelace`, (req, res) => {
    return res.sendFile (path.join (__dirname, `views`, `lovelace.html`))
});

app.get (`/turing`, (req, res) => {
    return res.sendFile (path.join (__dirname, `views`, `turing.html`))
});

app.get (`/hopper`, (req, res) => {
    return res.sendFile (path.join (__dirname, `views`, `hopper.html`))
});

app.get (`/hamilton`, (req, res) => {
    return res.sendFile (path.join (__dirname, `views`, `hamilton.html`))
});



app.listen (PORT, (req, res) => {
    console.log (`Server running in http://localhost:${PORT}`)
});