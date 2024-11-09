const { MongoClient, ServerApiVersion } = require("mongodb");

const url = process.env.DB_URL;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const uri = `mongodb+srv://${user}:${password}@${url}/?retryWrites=true&w=majority&appName=portfolio`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1, strict: true, deprecationErrors: true
    }
});

/**
 * This function connects to the MongoDB database and sends a ping
 * to confirm the connection.
 * @returns {Promise<void>}
 */
async function connect() {
    try {
        await client.connect();

        // Send a ping to confirm a successful connection
        await client.db("portfolio").command({ ping: 1 });
    } catch (e) {
        console.error(e);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

/**
 * This function pulls all data from the articles collection in the portfolio database.
 * @returns { Promise<[]> }
 */
async function pullData() {
    try {
        await client.connect();

        // Connect to the portfolio database and the articles collection
        const database = client.db("portfolio");
        const collection = database.collection("articles");

        // Find all articles
        return await collection.find({}).toArray();
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

/**
 * This function pushes a single document to the articles collection in the portfolio database.
 * @returns {Promise<void>}
 */
async function pushData(data) {
    try {
        await client.connect();
        const database = client.db("portfolio");
        const collection = database.collection("articles");

        // Insert a single document
        for (let i = 0; i < data.length; i++) {
            await collection.insertOne(data[i]);
        }

        console.log("Inserted data into MongoDB.");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

module.exports = { connect, pullData, pushData };

