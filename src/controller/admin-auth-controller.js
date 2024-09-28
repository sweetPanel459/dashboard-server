import { auth_admin_model } from "../models/auth-admin-model.js";

import { error_handler } from "../helpers/error-handler.js";
import { response_handler } from "../helpers/response-handler.js";

const get_admin_data = (req, res) => {
  try {
    auth_admin_model.get_admin_data_model(req, (data) =>
      response_handler(data, res),
    );
  } catch (error) {
    error_handler(error, res);
  }
};

const register_admin = (req, res) => {
  try {
    auth_admin_model.register_admin_model(req, (data) =>
      response_handler(data, res),
    );
  } catch (error) {
    error_handler(error, res);
  }
};

export const auth_controller = { get_admin_data, register_admin };
