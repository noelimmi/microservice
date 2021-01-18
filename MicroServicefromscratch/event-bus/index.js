const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://posts-clusterip-srv:4000/events", event);
  axios.post("http://comments-srv:4001/events", event);
  axios.post("http://query-srv:4002/events", event);
  axios.post("http://moderation-srv:4003/events", event);

  res.status(201).send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

const PORT = 4005;

app.listen(PORT, () => {
  console.log("Test");
  console.log(`Event-Bus up and running in ${PORT}`);
});
