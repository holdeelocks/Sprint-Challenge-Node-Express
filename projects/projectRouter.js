const express = require("express");
// const actions = require("../data/helpers/actionModel");
const projects = require("../data/helpers/projectModel");
const { errorMessage, serverError, wrongProject } = require("../config/helperFunctions");

const router = express.Router();

const missing = { errorMessage: "You must include both a name and description" };

router.get("/:id/actions", async (req, res) => {
  const { id } = req.params;
  try {
    const actions = await projects.getProjectActions(id);
    // console.log(actions);
    return actions.length !== 0
      ? res.status(200).json(actions)
      : errorMessage(404, wrongProject, res);
  } catch (err) {
    // console.log(err);
    errorMessage(500, serverError, res);
  }
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  projects
    .get(id)
    .then(response => {
      if (!response) {
        errorMessage(404, wrongProject, res);
      } else {
        res.status(200).json(response);
      }
    })
    .catch(err => {
      errorMessage(404, wrongProject, res);
    });
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
    return err.errno === 19 ? errorMessage(400, missing, res) : errorMessage(500, serverError, res);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  try {
    const success = await projects.update(id, update);
    // i did this way because I don't have to validate if the resource exists before I try to update it bc the update function
    // will either send me null (fail) which means the project doesn't exist or it will be successful
    return success === null ? errorMessage(404, wrongProject, res) : res.status(202).json(success);
  } catch (err) {
    errorMessage(500, serverError, res);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const success = await projects.remove(id);
    if (success) {
      const project = await projects.get(id);
      res.status(202).json(project);
    } else {
      errorMessage(404, wrongProject, res);
    }
  } catch (err) {
    errorMessage(500, serverError, res);
  }
});

module.exports = router;
