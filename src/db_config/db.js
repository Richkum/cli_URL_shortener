import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  user: "cli_user",
  host: "localhost",
  database: "urls",
  password: "password",
  port: 5432,
});

export default pool;
