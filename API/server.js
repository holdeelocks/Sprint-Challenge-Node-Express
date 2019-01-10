const express = require("express");
const configMiddleware = require("../config/middleware");
const apiRouter = require("./apiRouter");

const server = express();
configMiddleware(server);
server.use("/api", apiRouter);

module.exports = server;
