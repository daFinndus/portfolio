const express = require("express");

const news = require("./routes/news");
const measurement = require("./routes/measurement");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

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