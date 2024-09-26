import { error_handler } from "../utils/error-handler";

import { dashboard_mode } from "../models/dashboard-model";

const get_table = (req, res) => {
  try {
    dashboard_mode.get_table_model(req, (data, err) => {
      if (err) res.json(err);
      else res.json(data);
    });
  } catch (error) {
    error_handler(error, res);
  }
};

const update_table = (req, res) => {
  try {
    dashboard_mode.get_table_model(req, (data, err) => {
      if (err) res.json(err);
      else res.json(data);
    });
  } catch (error) {
    error_handler(error, res);
  }
};

const upload_table = (req, res) => {
  try {
    dashboard_mode.get_table_model(req, (data, err) => {
      if (err) res.json(err);
      else res.json(data);
    });
  } catch (error) {
    error_handler(error, res);
  }
};

const delete_table = (req, res) => {
  try {
    dashboard_mode.get_table_model(req, (data, err) => {
      if (err) res.json(err);
      else res.json(data);
    });
  } catch (error) {
    error_handler(error, res);
  }
};

const delete_row_table = (req, res) => {
  try {
    dashboard_mode.get_table_model(req, (data, err) => {
      if (err) res.json(err);
      else res.json(data);
    });
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
