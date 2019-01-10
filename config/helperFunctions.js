const serverError = { errorMessage: "Unable to reach server at this time" };
const wrongId = { errorMessage: "A resource with that id does not exist" };

const errorMessage = (status, message, res) => {
  return res.status(status).json(message);
};

module.exports = {
  serverError,
  wrongId,
  errorMessage
};
