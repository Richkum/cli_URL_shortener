#!/usr/bin/env node

import { Command } from "commander";
import axios from "axios";

const program = new Command();

program
  .command("shorten <url>")
  .description("shorten a url")
  .action(async (url) => {
    try {
      const shortenedURL = await shortenURL(url);
      console.log(`Shortened URL: ${shortenedURL}`);
    } catch (error) {
      console.log(`Error: ${url} is not a valid URL`, error.message);
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
        `Error: Unable to list shortened URLs`,
        error.response.data
      );
    }
  });

program.parse(process.argv);

async function shortenURL(longUrl) {
  const response = await axios.post("https://cleanuri.com/api/v1/shorten", {
    url: longUrl,
  });
  return response.data.result_url;
}

async function listShortenedURLs() {
  const response = await axios.get("https://cleanuri.com/api/v1/urls");
  return response.data;
}
