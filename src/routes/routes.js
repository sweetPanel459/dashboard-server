import { Router } from "express";

import { auth_controller } from "../controller/admin-auth-controller.js";
import { dashboard_controller } from "../controller/dashboard-controller.js";

export const router = Router();

// admin auth
router.get("/get-admin-data", (req, res) => {
  auth_controller.get_admin_data(req, res);
});

router.post("/register-admin", (req, res) => {
  auth_controller.register_admin(req, res);
});

// dashboard

router.get("/get-table/:id_admin", (req, res) => {
  dashboard_controller.get_table(req, res);
});

router.post("/upload-table/:id_admin", (req, res) => {
  dashboard_controller.upload_table(req, res);
});

router.put("/update-table", (req, res) => {
  dashboard_controller.update_table(req, res);
});

router.delete("/delete-row-table/:id_table/:id_row", (req, res) => {
  dashboard_controller.delete_row_table(req, res);
});

router.delete("/delete-table/:id_table", (req, res) => {
  dashboard_controller.delete_table(req, res);
});
