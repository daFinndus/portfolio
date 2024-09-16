const axios = require("axios");
const express = require("express");

const router = express.Router();

router.get("/backend", (_, res) => {
  res.send("Hello from backend!");
});

// This function reloads the server to avoid renders spindown issue
export function reload(url) {
  axios
    .get(url)
    .then((response) => {
      console.log(
        `Reloaded at ${new Date().toISOString()}: Status ${response.status}`
      );
    })
    .catch((error) => {
      console.error(
        `Error reloading at ${new Date().toISOString()}:`,
        error.message
      );
    });
}

// Export
module.exports = router;
