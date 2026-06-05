const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

function sum(a,b){
    return a+b;
}

function parzystosc(a){
    return a%2==0;
}

module.exports = {app, sum, parzystosc};