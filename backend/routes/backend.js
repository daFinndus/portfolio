const express = require("express");

const router = express.Router();

router.get("/backend", (_, res) => {
  res.send("Hello from backend!");
});

// Export
module.exports = router;
