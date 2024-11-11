const cors = require("cors");
const axios = require("axios");
const express = require("express");

const articles = require("./routes/articles");
const backend = require("./routes/backend");

const database = require("./routes/database");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

// Add CORS for limited backend access
app.use(cors({
    origin: [process.env.CROSS_ORIGIN_LOCAL, process.env.CROSS_ORIGIN_PUBLIC, process.env.VERCEL_URL, process.env.RENDER_URL],
    methods: ["GET"]
}));

// Call other scripts
app.use("/", articles);
app.use("/", backend);

// Universal wrong request handler
app.use((_, res) => {
    res.status(404).send("Sorry, this page does not exist.");
});

if (!port) {
    console.error("No port in environment variables found.");
    process.exit(1);
}

app.listen(port, () => {
    console.log(`Server running from port: ${port}\n`);
});

// Connect to the database
database.connect()
    .then(() => console.log("Connected to database."))
    .catch((error) => console.log("Database connection error:", error));

// This function reloads the server to avoid renders spindown issue
function reload() {
    const url = process.env.RENDER_URL || "";
    console.log("Reloading website on:", url);

    axios
        .get(url + "/backend")
        .then((response) => {
            console.log(`Reloaded at ${new Date().toISOString()}: Status ${response.status}`);
        })
        .catch((error) => {
            console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
        });
}

// Ping the backend every 5 minutes to avoid spindown
setInterval(reload, 1000 * 60 * 5);
