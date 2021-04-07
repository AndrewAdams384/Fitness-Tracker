const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}.`);
  });