
const path = require("path")
var express = require("express")
var React = require("react")
const ReactDOMServer = require('react-dom/server');
import {TextBlock} from "../components/textblock/textblock"

var app = express();



app.get("*", (req, res) => {


    const markup = ReactDOMServer.renderToString(
        <TextBlock />
    )
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>React and Webpack4</title>
</head>
<body>
  <section id="index">${markup}</section>
<script type="text/javascript" src="index_bundle.js"></script></body>
</html>
`)
})

app.listen(3000, () => {
    console.log("server is listening");
})

