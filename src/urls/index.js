import pool from "../db_config/db.js";

// TODO: Add a function to save the shortened URL to the database
//TODO: Add a function to retrieve the list of shortened URLs from the database
//Function to delete a url from the database

// My function to save a shortened URL to the database
async function saveShortenedURL(originalURL, shortenedURL) {
  try {
    const query = {
      text: "INSERT INTO url_table(long_url, short_url) VALUES($1, $2)",
      values: [originalURL, shortenedURL],
    };
    await pool.query(query);
    console.log("Shortened URL saved to database successfully");
  } catch (error) {
    console.error("AN ERROR OCCURRED", error);
    throw error.message;
  }
}

// My function to retrieve the list of shortened URLs from the database
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

//My function to delete a long and shortened URLs from the database
async function deleteAURL(url) {
  try {
    const query = `DELETE FROM short_url WHERE id = ${url}`;
    const deleted = await pool(query);
    console.log(`${url} deleted succesfully`);
    return;
  } catch (error) {
    console.log(`Couldn't delete ${url}`, error);
  }
}

export { saveShortenedURL, getAllShortenedURLs, deleteAURL };
