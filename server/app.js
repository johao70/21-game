const express = require('express');

const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 4000;
const rutas = require('./routes/routes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/server', rutas);

app.listen(port, () => {
    console.log(`Running on localhost:${port}/server`);
})