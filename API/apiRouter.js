const express = require("express");
const actionsRouter = require("../actions/actionRouter");
const projectsRouter = require("../projects/projectsRouter");

const router = express.Router();
router.use("/actions", actionsRouter);
router.use("/projects", projectsRouter);

module.exports = router;
