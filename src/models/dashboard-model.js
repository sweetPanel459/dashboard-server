import {
  custom_sql_query,
  custom_sql_execute,
} from "../helpers/custom-query-sql.js";

const get_table_model = async (req, res) => {
  const id_table = parseInt(req.params.id_admin);
  const res_db = await custom_sql_execute(
    "SELECT * FROM excel_tables WHERE id = ?",
    [id_table],
  );

  res({ response: res_db });
};

const upload_table_model = async (req, res) => {
  const id_admin = parseInt(req.params.id_admin);
  const table_data = JSON.stringify(req.body);

  const res_db = await custom_sql_query(
    "INSERT INTO excel_tables (id_admin, table_json) VALUES (?,?) ",
    [id_admin, table_data],
  );

  res({ response: res_db });
};

const update_table_model = async (req, res) => {
  const data = req.body;
  const id_table = data.id_table;
  const new_row_value = data.new_row_value;
  const row_to_modify = `$.${data.part_of_the_table}[${data.row_table_index}]`;

  const res_db = await custom_sql_query(
    `
      UPDATE excel_tables 
      SET table_json = JSON_SET(table_json, ?, JSON_ARRAY(?))
      WHERE id = ?
    `,
    [row_to_modify, new_row_value.join(","), id_table],
  );

  res({ response: res_db });
};

const delete_table_model = async (req, res) => {
  const id_table = parseInt(req.params.id_table);

  const res_db = await custom_sql_query(
    "DELETE FROM excel_tables WHERE id = ?",
    [id_table],
  );

  res({ response: res_db });
};

const delete_row_table_model = async (req, res) => {
  const section_table = req.body.part_of_the_table;
  const { id_table, id_row } = req.params;

  const row_to_delete = `$.${section_table}[${id_row}]`;

  const res_db = await custom_sql_query(
    `
      UPDATE excel_tables
      SET table_json = JSON_REMOVE(table_json, ?)
      WHERE id = ?
    `,
    [row_to_delete, id_table],
  );

  res({ response: res_db });
};

export const dashboard_model = {
  get_table_model,
  update_table_model,
  upload_table_model,
  delete_table_model,
  delete_row_table_model,
};
