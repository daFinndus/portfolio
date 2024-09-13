const multer = require("multer");
const express = require("express");

// Multer config for uploading files to memory
const upload = multer({ storage: multer.memoryStorage() });

// Create a router instance for the endpoints
const router = express.Router();

// Ping endpoint for health checks
router.get("/ping", (req, res) => {
  if (req.ip !== "::1") {
    return res.status(403).send("Access denied");
  } else {
    res.status(200).send("Pong");
  }
});

// Download endpoint for downloading files
router.get("/download", (req, res) => {
  if (req.ip !== "::1") {
    return res.status(403).send("Access denied");
  } else {
    const fileSize = 50;
    const file = fileSize * 1024 * 1024;

    const buffer = Buffer.alloc(file);
    res.set({
      "Content-Type": "application/zip",
      "Content-Length": file,
    });

    res.status(200).send(buffer);
  }
});

// Upload endpoint for uploading files
router.post("/upload", upload.single("file"), (req, res) => {
  if (req.ip !== "::1") {
    return res.status(403).send("Access denied");
  } else {
    res.status(200).send("File upload complete");
  }
});

console.log("Ping, Upload and Download are now reachable.");

// Export
module.exports = router;
