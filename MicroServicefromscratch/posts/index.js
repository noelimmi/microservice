const express = require("express");
const axios = require("axios");
const cors = require("cors");

const { randomBytes } = require("crypto");

const app = express();

app.use(express.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await axios.post("http://event-bus-srv:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });

  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("Received Event - ", req.body.type);
  res.send({});
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log("Added for a update v2");
  console.log(`Posts service up and running in port ${PORT}`);
});
