const express = require("express");
const router = express.Router();
const controller = require("../../controllers/workoutController.js")
router
    .get("/", controller.getAllWorkouts)
    .get("/:workoutId",controller.getOneWorkout)
    .post("/",controller.createWorkout)
    .patch("/:workoutId",controller.updateOneWorkout)
    .delete("/:workoutId",controller.deleteOneWorkout)


    module.exports = router;