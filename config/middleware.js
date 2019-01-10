const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const apiRouter = require("./apiRouter");

module.exports = server => {
  server.use("/api", apiRouter);
  server.use(express.json());
  server.use(cors());
  server.use(helmet());
};
