const TaskSchema = require("../models/task");

const createTask = (req, res) => {
  const Task = new TaskSchema({
    title: req.body.title,
    desc: req.body.desc,
  });
  Task.save()
    .then(() => {
      console.log("taskCreated");
      res.status(200).json({ message: "taskCreated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "creatingTaskFailed" });
    });
};

const getTask = (req, res) => {
  TaskSchema.find({ _id: req.params.id }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json(result);
    }
  });
};

const updateTask = async (req, res) => {
  const updateTask = await TaskSchema.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        desc: req.body.desc,
      },
    }
  );
  if (updateTask) {
    console.log("updatedSuccessfully");
    res.status(200).json({ message: "updatedSuccessfully" });
  } else {
    res.status(500).json({ message: "failedUpdating" });
    console.log("failedUpdating");
  }
};

const deleteTask = async (req, res) => {
  const deleteTask = await TaskSchema.findOneAndDelete({ _id: req.params.id });
  if (deleteTask) {
    console.log("deletedSuccessfully");
    res.status(200).json({ message: "deletedSuccessfully" });
  } else {
    res.status(500).json({ message: "failedDeleting" });
    consolelog("failedDeleting");
  }
};

module.exports = { createTask, getTask, updateTask, deleteTask };
