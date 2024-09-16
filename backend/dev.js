const express = require("express");

const articles = require("./routes/articles");
const backend = require("./routes/backend");

require("dotenv").config({ path: "../.env" });

console.log("Starting server in development mode...\n");

const app = express();
const port = process.env.PORT;

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
