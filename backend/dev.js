const cors = require("cors");
const axios = require("axios");
const express = require("express");

const articles = require("./routes/articles");
const backend = require("./routes/backend");

require("dotenv").config({ path: "../.env" });

console.log("Starting server in development mode...\n");

const app = express();
const port = process.env.PORT;

// Add CORS for limited backend access
app.use(
  cors({
    origin: [
      process.env.LOCAL_IP,
      process.env.PUBLIC_IP,
      process.env.RENDER_URL,
      process.env.VERCEL_URL,
    ],
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
  })
);

// Call other scripts
app.use("/", articles);
app.use("/", backend);

if (!port) {
  console.error("No port in environment variables found.");
  process.exit(1);
}

app.listen(port, () => {
  console.log(`Server running from port: ${port}\n`);
});

// This function reloads the server to avoid renders spindown issue
function reload(url) {
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

// Reload the server to avoid renders spindown issue
setInterval(reload(process.env.RENDER_URL_PROD), 1000 * 30);
