# URL Shortener CLI Tool

## Description

This CLI tool allows users to shorten long URLs using a URL shortening service's API. It also provides functionality to list and delete shortened URLs stored in a database.

## Usage

- Shorten a URL: `node index.js shorten <url>`
- List shortened URLs: `node index.js list`
- To know more about a command: `-- help`

## Installation

1. Clone the repository.
2. Install dependencies with `npm install`.

## Configuration

Ensure the following environment variables are set:

- `DB_USER`: Database username
- `DB_HOST`: Database host
- `DB_NAME`: Database name
- `DB_PASSWORD`: Database password
- `DB_PORT`: Database port

## License

This project is licensed under the MIT License.
