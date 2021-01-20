const express = require("express");
const TaskController = require("../controllers/task.js");

const Task = require("../models/task");

const router = express.Router();

router.get("/tasks", (req, res) => {
  Task.find().then((items) => res.json(items));
});
router.post("/createTask", TaskController.createTask);
router.get("/getTask/:id", TaskController.getTask);
router.patch("/updateTask/:id", TaskController.updateTask);
router.delete("/deleteTask/:id", TaskController.deleteTask);

module.exports = router;
