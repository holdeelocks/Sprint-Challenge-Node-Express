const express = require("express");
const actionRouter = require("../actions/actionRouter");
const projectRouter = require("../projects/projectRouter");
const router = express.Router();

router.use("/actions", actionRouter);
router.use("/projects", projectRouter);

module.exports = router;
