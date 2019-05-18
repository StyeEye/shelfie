const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require("./controller");
const massive = require("massive");
require("dotenv").config();

const server = express();

server.use(cors());
server.use(bodyParser.json());

const databaseVar = "db";

massive(process.env.CONNECTION_STRING)
    .then(database => {
        server.set(databaseVar, database);
        console.log("Database initialized");
    })
    .catch(error => {
        console.log(`Database initialization failed. Reason: ${error}`);
    });

server.get("/api/inventory", (req, res, next) => {
    const db = req.app.get(databaseVar);

    db.get_inventory().then(data => {
        res.send(data);
        // console.log(data);
    })
});

server.get("/api/info/:id", (req, res, next) => {
    const db = req.app.get(databaseVar);

    db.products.find({id: parseInt(req.params.id)})
        .then(response => {
            res.status(200).send(response[0]);
        })
        .catch(error => {
            res.sendStatus(500);
        })
})

server.delete("/api/remove/:id", (req, res, next) => {
    const db = req.app.get(databaseVar);

    db.products.destroy({id: Number(req.params.id)})
        .then(response => {
            res.sendStatus(200);
        })
        .catch(error => {
            res.sendStatus(500);
        })
})

server.post("/api/product", controller.productPost)

server.put("/api/update/:id", controller.editProduct)

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});