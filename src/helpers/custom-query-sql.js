import { pool } from "../config/mysql";

export const custom_sql_query = async (query, params) => {
  const [rows, fields] = await pool.query(query, [...params]);
  const query_response = { rows, fields };

  return query_response;
};
