#!/usr/bin/env node

import { Command } from "commander";
import axios from "axios";
import chalk from "chalk";
// import validURL from "valid-url";

import {
  saveShortenedURL,
  getAllShortenedURLs,
  deleteAURL,
} from "../urls/index.js";

const apiURL = "https://cleanuri.com/api/v1/shorten";

const program = new Command();

program
  .command("shorten <url>")
  .description("shorten a given url")
  .action(async (url) => {
    try {
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
      console.log(chalk.bgGray("Shortened URLs:"));
      shortenedURLs.forEach((url, index) => {
        console.log(chalk.yellow(`${index + 1}. ${url}`));
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
  const response = await axios.post(apiURL, {
    url: longUrl,
  });
  return response.data.result_url;
}

async function listShortenedURLs() {
  const listOfURLs = await getAllShortenedURLs();
  if (listOfURLs.length < 1) {
    console.log(chalk.green("SORRY, There are no links to show"));
    return [];
  }
  return listOfURLs.map((url) => url.short_url);
}

export { shortenURL, listShortenedURLs };
