const express = require("express");

const articles = require("./routes/articles");
const backend = require("./routes/backend");
const measurement = require("./routes/measurement");

require("dotenv").config({ path: "../.env" });

console.log("Starting server in development mode...\n");

const app = express();
const port = process.env.PORT;

// Call other scripts
app.use("/", articles);
app.use("/", backend);
app.use("/", measurement);

if (!port) {
  console.error("No port in environment variables found.");
  process.exit(1);
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}\n`);
});
