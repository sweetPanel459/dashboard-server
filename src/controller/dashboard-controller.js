import { dashboard_model } from "../models/dashboard-model.js";

import { error_handler } from "../helpers/error-handler.js";
import { response_handler } from "../helpers/response-handler.js";

const get_table = (req, res) => {
  try {
    dashboard_model.get_table_model(req, response_handler(data, err));
  } catch (error) {
    error_handler(error, res);
  }
};

const update_table = (req, res) => {
  try {
    dashboard_model.get_table_model(req, response_handler(data, err));
  } catch (error) {
    error_handler(error, res);
  }
};

const upload_table = (req, res) => {
  try {
    dashboard_model.get_table_model(req, response_handler(data, err));
  } catch (error) {
    error_handler(error, res);
  }
};

const delete_table = (req, res) => {
  try {
    dashboard_model.get_table_model(req, response_handler(data, err));
  } catch (error) {
    error_handler(error, res);
  }
};

const delete_row_table = (req, res) => {
  try {
    dashboard_model.get_table_model(req, response_handler(data, err));
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
