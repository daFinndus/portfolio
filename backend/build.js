const express = require("express");
const path = require("path");

const news = require("./routes/news");
const measurement = require("./routes/measurement");

require("dotenv").config({ path: "../.env" });

console.log("Starting server in production mode...\n");

const app = express();
const port = process.env.PORT;

// Serve the static files from the React app
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

// Call other scripts
app.use("/", news);
app.use("/", measurement);

if (!port) {
  console.error("No port in environment variables found.");
  process.exit(1);
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}\n`);
});
