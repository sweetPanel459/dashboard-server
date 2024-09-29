import { pool } from "../config/mysql2.js";

export const custom_sql_query = async (query, params) => {
  const [rows, fields] = await pool.query(query, [...params]);
  const query_response = { rows, fields };

  return query_response;
};

export const custom_sql_execute = async (query, params) => {
  const [rows, fields] = await pool.execute(query, [...params]);
  const query_response = { rows, fields };

  return query_response;
};
