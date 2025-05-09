
const express = require('express');
const serverless = require('serverless-http');
const app = express();
//const { handleInput } = require('./handleInput')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/default/Plants', (req, res) => {
    res.sendFile(__dirname + '/pages/plantList.html');
})

app.get('/default/page2', (req, res) => {
    res.sendFile(__dirname + '/pages/calendar.html');
})

app.get('/default/february', (req, res) => {
    res.sendFile(__dirname + '/pages/february.html');
})

app.get('/default/march', (req, res) => {
    res.sendFile(__dirname + '/pages/march.html');
})

app.get('/default/april', (req, res) => {
    res.sendFile(__dirname + '/pages/april.html');
})

app.get('/default/may', (req, res) => {
    res.sendFile(__dirname + '/pages/may.html');
})

app.get('/default/june', (req, res) => {
    res.sendFile(__dirname + '/pages/june.html');
})

app.get('/default/july', (req, res) => {
    res.sendFile(__dirname + '/pages/july.html');
})

app.get('/default/august', (req, res) => {
    res.sendFile(__dirname + '/pages/august.html');
})

app.get('/default/september', (req, res) => {
    res.sendFile(__dirname + '/pages/september.html');
})

app.get('/default/october', (req, res) => {
    res.sendFile(__dirname + '/pages/october.html');
})

app.get('/default/november', (req, res) => {
    res.sendFile(__dirname + '/pages/november.html');
})

app.get('/default/december', (req, res) => {
    res.sendFile(__dirname + '/pages/december.html');
})


app.post('/default/Plants', (req, res) => {
    res.sendFile(__dirname + '/pages/plantList.html');
    //const { side1, side2, side3 } = req.body;
    //const result = getValue();
    //res.json({ result });
})
module.exports.handler = serverless(app);
