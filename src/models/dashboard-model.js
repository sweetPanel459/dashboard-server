import {
  custom_sql_query,
  custom_sql_execute,
} from "../helpers/custom-query-sql.js";

const get_table_model = async (req, res) => {
  const id_table = await req.params.id;
  const res_db = await custom_sql_execute(
    "SELECT * FROM excel_tables WHERE id_table = ?",
    [id_table],
  );

  res({ response: res_db });
};

const update_table_model = (req, res) => {};

const upload_table_model = (req, res) => {};

const delete_table_model = (req, res) => {};

const delete_row_table_model = (req, res) => {};

export const dashboard_model = {
  get_table_model,
  update_table_model,
  upload_table_model,
  delete_table_model,
  delete_row_table_model,
};
