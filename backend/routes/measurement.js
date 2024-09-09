const multer = require("multer");
const express = require("express");

// Multer config for uploading files to memory
const upload = multer({ storage: multer.memoryStorage() });

// Create a router instance for the endpoints
const router = express.Router();

// Ping endpoint for health checks
router.get("/ping", (_, res) => {
  res.send("pong");
});

// Download endpoint for downloading files
router.get("/download", (_, res) => {
  const fileSize = 50;
  const file = fileSize * 1024 * 1024;

  const buffer = Buffer.alloc(file);
  res.set({
    "Content-Type": "application/zip",
    "Content-Length": file,
  });

  res.send(buffer);
});

// Upload endpoint for uploading files
router.post("/upload", upload.single("file"), (_, res) => {
  res.send("File upload complete");
});

console.log("Ping, Upload and Download are now reachable.");

// Export
module.exports = router;
