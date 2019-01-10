const serverError = { errorMessage: "Unable to reach server at this time" };
const wrongId = { errorMessage: "Unable to locate resource with that id" };

const errorMessage = (status, message, res) => {
  return res.status(status).json(message);
};

module.exports = {
  serverError,
  wrongId,
  errorMessage
};
