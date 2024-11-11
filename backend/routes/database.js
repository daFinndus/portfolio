const { MongoClient, ServerApiVersion, WithId } = require("mongodb");

require("dotenv").config();

const url = process.env.DB_URL;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const uri = `mongodb+srv://${user}:${password}@${url}/?retryWrites=true&w=majority&appName=portfolio`;

/**
 * Create a new MongoClient with the Stable API version
 * @returns {MongoClient}
 */
const reinitiate = () => {
    return new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1, strict: true, deprecationErrors: true
        }
    });
};

/**
 * This function connects to the MongoDB database and sends a ping
 * to confirm the connection.
 * @returns {Promise<void>}
 */
async function connect() {
    const client = reinitiate();

    try {
        await client.connect();

        // Send a ping to confirm a successful connection
        await client.db("portfolio").command({ ping: 1 });
    } catch (error) {
        console.error(error);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

/**
 * This function pulls all data from the articles collection in the portfolio database.
 * @returns { WithId<Document>[] }
 */
const pull = async () => {
    const client = reinitiate();
    let result = [];

    try {
        await client.connect();

        // Connect to the portfolio database and the articles collection
        const database = client.db("portfolio");
        const collection = database.collection("articles");

        // Find all articles in the collection and return them
        result = await collection.find({}).toArray();
    } catch (error) {
        console.error("An error occured while fetching database entries: " + error);
    } finally {
        await client.close();
    }

    console.log("Documents retrieved:" + result.length);
    return result;
};

/**
 * This function pushes multiple documents to the articles collection in the portfolio database.
 * @param {Array} data - Array of documents to be inserted.
 * @returns {Promise<void>}
 */
const push = async (data) => {
    const client = reinitiate();

    try {
        await client.connect();
        const database = client.db("portfolio");
        const collection = database.collection("articles");

        // Insert multiple documents
        console.log("Going to insert ", data.length, " documents into MongoDB.");
        await collection.insertMany(data);
        console.log("Successfully inserted data into MongoDB.");
    } catch (error) {
        console.error("An error occurred while inserting data: ", error);
    } finally {
        await client.close();
    }
};

module.exports = { connect, pull, push };

