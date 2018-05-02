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
const surveyKO = readFileSync(`${__appBase}/node_modules/survey-knockout/survey.ko.min.js`).toString('utf-8');
const ko = readFileSync(`${__appBase}/node_modules/knockout/build/output/knockout-latest.js`).toString('utf-8');
const ace = readFileSync(`${__appBase}/node_modules/ace-builds/src-min-noconflict/ace.js`).toString('utf-8');
const aceLang = readFileSync(`${__appBase}/node_modules/ace-builds/src-min-noconflict/ext-language_tools.js`).toString('utf-8');
const bootstrap = readFileSync(`${__appBase}/node_modules/bootstrap/dist/css/bootstrap.min.css`).toString('utf-8');
const bootstrapMap = readFileSync(`${__appBase}/node_modules/bootstrap/dist/css/bootstrap.min.css.map`).toString('utf-8');

app.use(bodyParser.urlencoded({'extended': true}));
app.use(bodyParser.json());
app.use(express.static(`${__appBase}/public`));

app.get('/js/ext-language_tools.js', (req, res) => {
  res.send(aceLang).end();
});
app.get('/js/ace.min.js', (req, res) => {
  res.send(ace).end();
});
app.get('/js/surveyeditor.js', (req, res) => {
  res.send(newJS).end();
});
app.get('/js/knockout.js', (req, res) => {
  res.send(ko).end();
});
app.get('/js/survey-knockout.js', (req, res) => {
  res.send(surveyKO).end();
});
app.get('/css/surveyeditor.css', (req, res) => {
  res.set('Content-Type', 'text/css');
  res.send(css).end();
});
app.get('/css/bootstrap.min.css', (req, res) => {
  res.set('Content-Type', 'text/css');
  res.send(bootstrap).end();
});
app.get('/css/bootstrap.min.css.map', (req, res) => {
  res.set('Content-Type', 'text/css');
  res.send(bootstrapMap).end();
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