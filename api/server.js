const express = require("express");
const helmet = require('helmet');
const cors = require('cors');

const Characters = require("../characters/characters-model");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
    res.status(200).json({ api: "Good news, everyone!" });
});

server.get("/characters", (req, res) => {
    Characters.getAll()
        .then(characters => {
            res.status(200).json(characters);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = server;