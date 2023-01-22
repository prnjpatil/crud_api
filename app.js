const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const todoRouters = require("./routes/todoRoutes");


const app = express();

app.use(bodyParser.json());

const dbURI = "mongodb+srv://myusername:mypassword@cluster0.vsbo8.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

app.use( "/todos"  , todoRouters);
