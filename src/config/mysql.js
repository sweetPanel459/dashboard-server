import { createPool } from "mysql2/promise";

const password = process.env.SQL_PASSWORD;
const host = process.env.SQL_PORT;

export const pool = createPool({
  host: "localhost",
  port: host,
  user: "root",
  password: password,
  database: "booksAndSongs",
  connectionLimit: "10",
});
