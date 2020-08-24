const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config();
app.use(bodyParser.json());

mongoose.connect(
  "mongodb://localhost:27017/carsBoardDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("conect to db");
  }
);

// routes
const authRoute = require("./routes/auth");
const carsRoute = require("./routes/cars");

app.use("/api", authRoute);
app.use("/api", carsRoute);

if (process.env.NODE_ENV === "production") {
  const root = path.join(__dirname, "..", "client", "build");
  app.use(express.static(root));
  app.get("*", (req, res) => {
    res.sendFile("index.html", { root });
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is up on port: " + PORT));
