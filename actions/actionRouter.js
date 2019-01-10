const express = require("express");
const actions = require("../data/helpers/actionModel");
const projects = require("../data/helpers/projectModel");
const { errorMessage, serverError, wrongId } = require("../config/helperFunctions");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const action = await actions.get(id);
    return action ? res.status(200).json(action) : errorMessage(404, wrongId, res);
  } catch (err) {
    errorMessage(500, serverError, res);
  }
});

router.get("/", async (req, res) => {
  try {
    const actionList = await actions.get();
    res.status(200).json(actionList);
  } catch (err) {
    console.log(err);
    errorMessage(500, serverError, res);
  }
});

router.post("/", async (req, res) => {
  const newAction = req.body;
  try {
    const added = await actions.insert(newAction);
    res.status(201).json(added);
  } catch (err) {
    console.log(err);
    errorMessage(500, serverError, res);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  try {
    const action = await actions.get(id);
    if (action) {
      const success = await actions.update(id, update);
      res.status(202).json(success);
      // return success ? res.status(202).json(update) : errorMessage(404, wrongId, res);
    }
  } catch (err) {
    console.log(err);
    errorMessage(500, serverError, res);
  }
});

module.exports = router;
