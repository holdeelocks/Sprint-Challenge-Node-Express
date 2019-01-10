const express = require("express");
const actions = require("../data/helpers/actionModel");
// const projects = require("../data/helpers/projectModel");
const { errorMessage, serverError, wrongAction } = require("../config/helperFunctions");
const missing = { errorMessage: "You must include a project_id, notes and a description" };

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const action = await actions.get(id);
    return action ? res.status(200).json(action) : errorMessage(404, wrongAction, res);
  } catch (err) {
    errorMessage(500, serverError, res);
  }
});

router.get("/", async (req, res) => {
  try {
    const actionList = await actions.get();
    res.status(200).json(actionList);
  } catch (err) {
    errorMessage(500, serverError, res);
  }
});

router.post("/", async (req, res) => {
  const newAction = req.body;
  try {
    const added = await actions.insert(newAction);
    res.status(201).json(added);
  } catch (err) {
    return err.errno === 19 ? errorMessage(400, missing, res) : errorMessage(500, serverError, res);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  try {
    const success = await actions.update(id, update);
    return success ? res.status(202).json(success) : errorMessage(404, wrongAction, res);
  } catch (err) {
    errorMessage(500, serverError, res);
  }
});

module.exports = router;
