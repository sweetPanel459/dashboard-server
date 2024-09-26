import { dashboard_mode } from "../models/dashboard-model";

import { error_handler } from "../helpers/error-handler";
import { response_handler } from "../helpers/response-handler";

const get_table = (req, res) => {
  try {
    dashboard_mode.get_table_model(req, response_handler(data, err));
  } catch (error) {
    error_handler(error, res);
  }
};

const update_table = (req, res) => {
  try {
    dashboard_mode.get_table_model(req, response_handler(data, err));
  } catch (error) {
    error_handler(error, res);
  }
};

const upload_table = (req, res) => {
  try {
    dashboard_mode.get_table_model(req, response_handler(data, err));
  } catch (error) {
    error_handler(error, res);
  }
};

const delete_table = (req, res) => {
  try {
    dashboard_mode.get_table_model(req, response_handler(data, err));
  } catch (error) {
    error_handler(error, res);
  }
};

const delete_row_table = (req, res) => {
  try {
    dashboard_mode.get_table_model(req, response_handler(data, err));
  } catch (error) {
    error_handler(error, res);
  }
};

export const dashboard_controller = {
  get_table,
  update_table,
  upload_table,
  delete_table,
  delete_row_table,
};
