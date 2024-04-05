import pg from "pg";
import dotenv from "dotenv";

// dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: "cli_user",
  host: "localhost",
  database: "urls",
  password: "password",
  port: 5432,
});

// pool.on("connect", () => {
//   console.log("connected to database");
// });

// pool.on("error", (error) => {
//   console.log("error connecting to database", error);
// });

export default pool;
