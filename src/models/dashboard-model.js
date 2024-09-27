import { custom_sql_query } from "../helpers/custom-query-sql.js";

const get_table_model = (req, res) => {
  res({
    data: "santiago andrade tuiran juan santiago andrade tuiuran as;ldfjasf;lkjasdf;",
  });
};

const update_table_model = (req, res) => { };

const upload_table_model = (req, res) => { };

const delete_table_model = (req, res) => { };

const delete_row_table_model = (req, res) => { };

export const dashboard_model = {
  get_table_model,
  update_table_model,
  upload_table_model,
  delete_table_model,
  delete_row_table_model,
};
