import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.on("connect", () => {
  console.log("connected to database");
});

pool.on("error", (error) => {
  console.log("error connecting to database", error);
});

// TODO: Add a function to save the shortened URL to the database
//TODO: Add a function to retrieve the list of shortened URLs from the database

// Function to save a shortened URL to the database
async function saveShortenedURL(originalURL, shortenedURL) {
  try {
    const query = {
      text: "INSERT INTO url_table(long_url, short_url) VALUES($1, $2)",
      values: [originalURL, shortenedURL],
    };
    await pool.query(query);
    console.log("Shortened URL saved to database successfully");
  } catch (error) {
    console.error("AN ERROR OCCURRED");
    throw error.message;
  }
}

// Function to retrieve the list of shortened URLs from the database
async function getAllShortenedURLs() {
  try {
    const query = "SELECT short_url FROM url_table";
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error(
      "An error occurred while retrieving shortened URLs, please try again"
    );
    throw error.message;
  }
}

export { saveShortenedURL, getAllShortenedURLs };
