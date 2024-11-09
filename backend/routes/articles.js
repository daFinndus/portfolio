const axios = require("axios");
const cron = require("node-cron");
const express = require("express");

require("dotenv").config();

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
                apiKey: key
            }
        });

        let cache = response.data.articles;

        // Remove all articles where the link is https://removed.com
        const forbidden = "https://removed.com";
        cache = cache.filter((article) => article.url !== forbidden);

        // Add the publisher by splitting the title
        cache = cache.map((article) => {
            const parts = article.title.split(" - ");

            const title = parts.length > 1 ? parts[0] : null;
            const publisher = parts.length > 1 ? parts.pop() : null;

            return {
                ...article,
                title,
                publisher
            };
        });

        // Format the date to dd/mm/yyyy
        cache.forEach((article) => {
            article.publishedAt = new Date(article.publishedAt).toLocaleDateString(
                "us-EN"
            );
        });

        // Remove articles, if they are already in the news list
        const titles = new Set(news.map((article) => article.title));
        const length = cache.length;
        cache = cache.filter((article) => !titles.has(article.title));
        console.log("Removed", length - cache.length, "duplicates from cache");

        // Update the news list
        news.push(...cache);

        console.log("Fetched", cache.length, "articles at", new Date());
        console.log("Total news count:", news.length);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
};

// Cronjob for fetching news every 2 hours
cron.schedule("0 */2 * * *", () => {
    fetchNewsFromAPI();
});

// fetchNewsFromAPI();

// Export
module.exports = router;
