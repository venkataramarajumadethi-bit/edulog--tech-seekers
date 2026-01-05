const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running on Azure 🚀");
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Azure Backend" });
});

app.listen(PORT, () => {
  console.log("Server started");
});
