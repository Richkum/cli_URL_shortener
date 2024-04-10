# URL Shortener CLI Tool

## Description

This CLI tool allows users to shorten long URLs using a URL shortening service's API. It also provides functionality to list and delete shortened URLs stored in a database.

## Installation

1. Clone the repository.
2. Run `npm install `
3. In the project directory, open your terminal and run `npm install -g `

## Congiguration

- Connect to your database
- Create a table named `url_table` with two columns : `long_url` and `short_url`

## Usage

- Shorten a URL: `<CLI name> <command> <url>`
  To shorten a url, use the `shorten` command.
  For example `url-shortener shorten https://www.example.com`
- List shortened URLs: `<CLI name> <command>`
  To see a list of shortened URLs, use the `list` command.
  For example `url-shortener list` and you will see all the URLs that you've shortened
- To know more about a command: `help`

## API

The API i used in this project for the URL shortening is the `cleanurl API`
You can visit their site at (https://cleanuri.com/docs) to know more about their API

## License

This project is licensed under the `MIT License`.
