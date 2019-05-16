const express = require("express");
const controller = require("./controller");
const massive = require("massive");
require("dotenv").config();

const server = express();

massive(process.env.CONNECTION_STRING)
    .then(database => {
        server.set("db", database);
        console.log("Database initialized");
    })
    .catch(error => {
        console.log(`Database initialization failed. Reason: ${error}`);
    });

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});