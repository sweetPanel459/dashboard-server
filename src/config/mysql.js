import { createPool } from "mysql2/promise";

export const connection = createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "santiago459",
  database: "booksAndSongs",
  connectionLimit: "10",
});
