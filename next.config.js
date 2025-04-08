const { PHRASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (env) => {
  if (env == PHRASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        MONGODB_CLIENT:
          "mongodb+srv://camillegueyraud:lJHMcEKOYfBFejy3@cluster0.gid4k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        MONGODB_DATABASE: "threads",
        NEXTAUTH_SECRET: "erjgezrivbi",
        NEXTAUTH_URL: "http://localhost:3000",
      },
    };
  } else {
    return {
      env: {
        MONGODB_CLIENT:
          "mongodb+srv://camillegueyraud:lJHMcEKOYfBFejy3@cluster0.gid4k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        MONGODB_DATABASE: "threads",
        NEXTAUTH_SECRET: "erjgezrivbi",
        NEXTAUTH_URL: "http://localhost:3000",
      },
    };
  }
};

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://camillegueyraud:lJHMcEKOYfBFejy3@cluster0.gid4k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
