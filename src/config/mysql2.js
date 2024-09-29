import { createPool } from "mysql2/promise";

const password = process.env.SQL_PASSWORD;
const port = process.env.SQL_PORT;

export const pool = createPool({
  host: "localhost",
  port: port,
  user: "root",
  password: password,
  database: "dashboard_tables",
  connectionLimit: "10",
});
