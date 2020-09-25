const express = require("express");
const cors = require("cors");
const { randomBytes } = require("crypto");

const app = express();

app.use(express.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.status(200).send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const coomentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: coomentId, content });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

const PORT = 4001;

app.listen(PORT, () => {
  console.log(`Comments service up and running in ${PORT}`);
});
