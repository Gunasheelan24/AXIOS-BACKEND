const express = require("express");
const app = express();
const dotenv = require("dotenv").config({ path: "./config.env" });
const port = process.env.NODE_PORT || 3000;
const DB = process.env.NODE_DB;
const mongoose = require("mongoose");
const { post, get, remove, edit } = require("./controller/user");

app.use(express.json());

app.post("/api/v1", post);
app.get("/api/v1", get);
app.delete("/api/v1/:Id", remove);
app.patch("/api/v1/:id", edit);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected Database");
  })
  .catch(() => {
    console.log("error");
  });
app.listen(port, (R) => console.log("Server Running...."));
