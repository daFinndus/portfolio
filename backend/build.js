const cors = require("cors");
const path = require("path");
const express = require("express");

const articles = require("./routes/articles");
const backend = require("./routes/backend");
const measurement = require("./routes/measurement");

require("dotenv").config({ path: "../.env" });

console.log("Starting server in production mode...\n");

const app = express();
const port = process.env.PORT;

// Serve the static files from the React app
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.use(
  cors({
    origin: [process.env.CROSS_ORIGIN_LOCAL, process.env.CROSS_ORIGIN_PUBLIC],
    methods: ["GET"],
  })
);

// Call other scripts
app.use("/", articles);
app.use("/", backend);
app.use("/", measurement);

// Handles any requests that don't match the ones above
app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

if (!port) {
  console.error("No port in environment variables found.");
  process.exit(1);
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}\n`);
});
