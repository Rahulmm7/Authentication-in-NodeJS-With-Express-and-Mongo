const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const db = require('./db');
const user = require('./routes/userRoute');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("./", (req, res) => {
    res.send("api working");
});
app.use('/user', user);


app.listen(PORT, (req, res) => {
    console.log("server started at port 3000");
});