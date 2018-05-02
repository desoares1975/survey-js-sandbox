'use strict';

global.__appBase = __dirname;

const express = require('express');
const bodyParser = require('body-parser');
//const survey = require('survey-react');
const app = express();
const port = 8910;
const { readFileSync } = require('fs');
const html = readFileSync(`${__appBase}/views/index.html`).toString('utf-8');
const newHtml = readFileSync(`${__appBase}/views/new.html`).toString('utf-8');
const newJS = readFileSync(`${__appBase}/node_modules/surveyjs-editor/surveyeditor.js`).toString('utf-8');
const css = readFileSync(`${__appBase}/node_modules/surveyjs-editor/surveyeditor.css`).toString('utf-8');
const knockout = readFileSync(`${__appBase}/node_modules/survey-knockout/survey.ko.js`).toString('utf-8');

app.use(bodyParser.urlencoded({'extended': true}));
app.use(bodyParser.json());
app.use(express.static(`${__appBase}/public`));

app.get('/js/surveyeditor.js', (req, res) => {
  res.send(newJS).end();
});
app.get('/js/survey-knockout.js', (req, res) => {
  res.send(knockout).end();
});
app.get('/css/surveyeditor.css', (req, res) => {
  req.headers['Content-Type'] = 'text/css';
  res.send(css).end();
});
app.get('/new', (req, res) => {
  res.send(newHtml).end();
});
app.get('*', (req, res) => {
  res.send(html).end();
});

app.listen(port, () => {
  console.info(`Sandbox Application up and running on port ${port}`);
});