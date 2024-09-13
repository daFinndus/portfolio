const express = require("express");
const cron = require("node-cron");
const axios = require("axios");

require("dotenv").config({ path: "./../.env" });

const router = express.Router();

// Temporary cache for the news
let news = [];
let key = process.env.NEWS_API_KEY;

// Function for fetching the news
const fetchNewsFromAPI = async () => {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        category: "technology",
        apiKey: key,
      },
    });

    let cache = response.data.articles;

    // Add the publisher by splitting the title
    cache = cache.map((article) => {
      const parts = article.title.split(" - ");

      const title = parts.length > 1 ? parts[0] : null;
      const publisher = parts.length > 1 ? parts.pop() : null;

      return {
        ...article,
        title,
        publisher,
      };
    });

    // Format the date to dd/mm/yyyy
    cache.forEach((article) => {
      article.publishedAt = new Date(article.publishedAt).toLocaleDateString(
        "us-EN"
      );
    });

    // Update the news list
    news = cache;

    console.log("Fetched", news.length, "articles at", new Date());
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};

// Cronjob for fetching news every 2 hours
cron.schedule("0 */2 * * *", () => {
  fetchNewsFromAPI();
});

fetchNewsFromAPI();

// Endpoint for the news articles
router.get("/articles", (req, res) => {
  if (req.ip !== "::1") {
    return res.status(403).send("Access denied");
  } else {
    return res.json(news);
  }
});

// Export
module.exports = router;
