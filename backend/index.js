const cors = require("cors");
const express = require("express");

const articles = require("./routes/articles");
const backend = require("./routes/backend");

require("dotenv").config();

console.log("Starting server in production mode...\n");

const app = express();
const port = process.env.PORT;

// Add CORS for limited backend access
app.use(
  cors({
    origin: [
      process.env.CROSS_ORIGIN_LOCAL,
      process.env.CROSS_ORIGIN_PUBLIC,
      process.env.RENDER_URL,
      process.env.RENDER_URL_PROD,
    ],
    methods: ["GET"],
    accessControlAllowOrigin: "*",
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
function reload() {
  const url = process.env.RENDER_URL;

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

setInterval(reload, 1000 * 30);
