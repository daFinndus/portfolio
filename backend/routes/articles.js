const axios = require("axios");
const cron = require("node-cron");
const express = require("express");
const database = require("./database");

const router = express.Router();

require("dotenv").config();

// Temporary cache for the news
let news = [];
let key = process.env.NEWS_API_KEY;

/**
 * This function fetches news from the News API, stores it in cache for further
 * processing and then uploads it to the database.
 * @returns {Promise<void>}
 */
const fetchNewsFromAPI = async () => {
    news = [];

    try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines", {
            params: {
                category: "technology", apiKey: key
            }
        });

        let cache = response.data["articles"];

        // Remove all articles where the link is https://removed.com
        const forbidden = "https://removed.com";
        cache = cache.filter((article) => article.url !== forbidden);

        // Add the publisher by splitting the title
        cache = cache.map((article) => {
            const parts = article.title.split(" - ");

            const title = parts.length > 1 ? parts[0] : null;
            const publisher = parts.length > 1 ? parts.pop() : null;

            return {
                ...article, title, publisher
            };
        });

        // Format the date to dd/mm/yyyy
        cache.forEach((article) => {
            article.publishedAt = new Date(article.publishedAt).toLocaleDateString("en-GB");
        });

        // Remove articles, if they are already in the news list
        let [data] = await Promise.all([database.pull()]);
        console.log("Fetched", data.length, "articles from database");

        // This snippet is used to remove duplicates from the cache
        if (cache.length > 0 && data.length > 0) {
            const titles = new Set(data.map((article) => article["title"]));
            const length = cache.length;
            cache = cache.filter((article) => !titles.has(article["title"]));
            console.log("Removed", length - cache.length, "duplicates from cache");
        }

        // Upload the articles to the database
        if (cache.length > 0) {
            await database.push(cache);
        }

        news.push(...data, ...cache);
        console.log("Fetched", cache.length, "articles at", new Date());
    } catch (error) {
        console.error("Error fetching news:", error);
    }
};

// Cronjob for fetching news every 2 hours
cron.schedule("0 */2 * * *", () => {
    fetchNewsFromAPI()
        .then(() => {
            console.log("News fetched successfully.");
        })
        .catch((error) => {
            console.error("Error fetching news:", error);
        });
});

fetchNewsFromAPI().then(() => {
    console.log("News fetched successfully.");
});

// GET request for fetching news
router.get("/news", (_, res) => {
    res.json(news);
});

// Export
module.exports = router;
