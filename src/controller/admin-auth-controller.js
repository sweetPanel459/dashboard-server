import { Router } from "express";

export const router = Router();

router.post("/register-admin", (req, res) => {
  console.log(req.body);
  console.log("santiago");
});
