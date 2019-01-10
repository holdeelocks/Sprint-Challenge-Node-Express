const serverError = { errorMessage: "Unable to reach server at this time" };
const wrongAction = { errorMessage: "An action with that id does not exist" };
const wrongProject = { errorMessage: "A project with that id does not exist" };

const errorMessage = (status, message, res) => {
  return res.status(status).json(message);
};

module.exports = {
  serverError,
  wrongAction,
  wrongProject,
  errorMessage
};
