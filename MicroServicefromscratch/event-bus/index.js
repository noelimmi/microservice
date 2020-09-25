const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);

  res.status(201).send({ status: "OK" });
});

const PORT = 4005;

app.listen(PORT, () => {
  console.log(`Event-Bus up and running in ${PORT}`);
});
