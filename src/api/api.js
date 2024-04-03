import { saveShortenedURL } from "../db_confg/db.js";
import { shortenURL } from "../cli/index.js";

async function shortenAndSaveURL(originalURL) {
  try {
    const shortenedURL = await shortenURL(originalURL);
    await saveShortenedURL(originalURL, shortenedURL);
    console.log("URL shortened and saved to database successfully");
  } catch (error) {
    console.error("An error occurred while shortening and saving URL");
    throw error.message;
  }
}

// Usage example:
const originalURL = "https://example.com";
shortenAndSaveURL(originalURL);
