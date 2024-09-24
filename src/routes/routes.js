import { Router } from "express";

import { auth_controller } from "../controller/admin-auth-controller.js";

export const router = Router();

// admin auth
router.get("/get-admin-data", (req, res) => {
  auth_controller.get_admin_data(req, res);
});

router.post("/register-admin", (req, res) => {
  auth_controller.register_admin(req, res);
});
