const express = require("express");
const controller = require("./controller");

const server = express();

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});