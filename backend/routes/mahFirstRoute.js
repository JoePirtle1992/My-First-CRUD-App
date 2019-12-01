const express = require("express");
const mahFirstRoute = express.Router();
const mahControllers = require("../controllers/mahFirstController");

mahFirstRoute
  .route("/")
  .get(mahControllers.getEmAll)
  .post(mahControllers.addOne);

mahFirstRoute
  .route("/:id")
  .get(mahControllers.getOne)
  .put(mahControllers.updateOne)
  .delete(mahControllers.deleteOne);

module.exports = mahFirstRoute;
