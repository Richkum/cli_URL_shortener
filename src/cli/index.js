#!/usr/bin/env node

import { Command } from "commander";
import axios from "axios";
import chalk from "chalk";
// import validURL from "valid-url";

import { saveShortenedURL, getAllShortenedURLs } from "../urls/index.js";

const program = new Command();

program
  .command("shorten <url>")
  .description("shorten a given url")
  .action(async (url) => {
    try {
      // if (!validURL.isUri(url)) {
      //   throw new Error(chalk.red("Invalid URL"));
      // }
      const shortenedURL = await shortenURL(url);
      const longURL = url;

      if (shortenedURL) {
        await saveShortenedURL(longURL, shortenedURL);
      }

      console.log(`Shortened URL: ${chalk.yellowBright(shortenedURL)}`);
      console.log(`Long URL: ${url}`);
    } catch (error) {
      console.log(chalk.red(`ERROR: ${url} is not a valid URL`), error.message);
    }
  });

program
  .command("list")
  .description("list all shortened URLs")
  .action(async () => {
    try {
      const shortenedURLs = await listShortenedURLs();
      console.log("Shortened URLs:");
      shortenedURLs.forEach((url, index) => {
        console.log(`${index + 1}. ${url}`);
      });
    } catch (error) {
      console.error(
        chalk.red(`ERROR: Unable to list shortened URLs`),
        error.response.data
      );
    }
  });

// program
//   .command("delete <id>")
//   .description("delete a shortened URL")
//   .action(async (id) => {
//     try {
//       await axios.delete(`https://cleanuri.com/api/v1/urls/${id}`);
//       console.log(`Shortened URL with ID ${id} deleted successfully`);
//     } catch (error) {
//       console.error(`Error: Unable to delete shortened URL with ID ${id}`);
//     }
//   });

program.parse(process.argv);

async function shortenURL(longUrl) {
  const response = await axios.post("https://cleanuri.com/api/v1/shorten", {
    url: longUrl,
  });
  return response.data.result_url;
  // saveShortenedURL();
}

async function listShortenedURLs() {
  const response = await axios.get("https://cleanuri.com/api/v1/urls");
  return response.data;
}

export { shortenURL, listShortenedURLs };
