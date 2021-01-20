const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/keys");
const TaskRoutes = require("./routes/task");

const app = express();

app.use(express.json());

app.use("/api/tasks", TaskRoutes);

const port = process.env.PORT || 5000;

mongoose
  .connect(db.MangoUri, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MangoDB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server Started on ${port}`));
