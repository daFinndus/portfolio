const express = require("express");
const cron = require("node-cron");
const axios = require("axios");

require("dotenv").config();

const router = express.Router();

// Temporary cache for the news
let news = [];
let key = process.env.NEWS_API_KEY;

console.log("API key is", key);

// Function for fetching the news
const fetchNewsFromAPI = async () => {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        category: "technology",
        apiKey: key,
      },
    });

    // Filter all articles that don't have an image
    cache = response.data.articles.filter(
      (article) => article.urlToImage !== null
    );

    // Format the date to dd-mm-yyyy
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

// Cronjob for fetching news every 4 hours
cron.schedule("0 */4 * * *", () => {
  fetchNewsFromAPI();
});

fetchNewsFromAPI();

// Endpoint for the news
router.get("/news", (_, res) => {
  res.json(news);
});

// Export
module.exports = router;
