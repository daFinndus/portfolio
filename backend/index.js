const express = require("express");
const multer = require("multer");
const app = express();
const port = 3030;

// Multer config for uploading files to memory
const upload = multer({ storage: multer.memoryStorage() });

// Ping endpoint for health checks
app.get("/ping", (req, res) => {
  res.send("pong");
});

// Download endpoint for downloading files
app.get("/download", (req, res) => {
  res.download("dummies/50MB.zip");
});

// Upload endpoint for uploading files
app.post("/upload", upload.single("file"), (req, res) => {
  console.log("File received:", req.file);
  res.send("File upload complete");
});

app.listen(port, () => {
  console.log("Ping, Upload and Download are now reachable.");
  console.log(`Server running at http://localhost:${port}\n`);
});
