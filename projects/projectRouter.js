const express = require("express");
const actions = require("../data/helpers/actionModel");
const projects = require("../data/helpers/projectModel");
const { errorMessage, serverError, wrongId } = require("../config/helperFunctions");

const router = express.Router();

const missing = { errorMessage: "You must include both a name and description" };

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const project = await projects.get(id);
    return project ? res.status(200).json(project) : errorMessage(404, wrongId, res);
  } catch (err) {
    errorMessage(500, serverError, res);
  }
});

router.get("/", async (req, res) => {
  try {
    const projectList = await projects.get();
    res.status(200).json(projectList);
  } catch (err) {
    errorMessage(500, serverError, res);
  }
});

router.post("/", async (req, res) => {
  const newProject = req.body;

  try {
    const added = await projects.insert(newProject);
    res.status(201).json(added);
  } catch (err) {
    return err.errno === 19 ? errorMessage(404, missing, res) : errorMessage(500, serverError, res);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  try {
    const project = await projects.get(id);
    console.log(project);
    if (!project) {
      console.log("here");
      errorMessage(404, wrongId, res);
      // return success ? res.status(202).json(update) :
    } else {
      console.log("no here");
      const success = await projects.update(id, update);
      res.status(202).json(success);
    }
  } catch (err) {
    console.log(err);
    errorMessage(500, serverError, res);
  }
});

module.exports = router;
