const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server działa na porcie ${PORT}`);
});

function sum(a,b){
    return a+b;
}

function parzystosc(a){
    return a%2==0;
}

module.exports = {sum, parzystosc};