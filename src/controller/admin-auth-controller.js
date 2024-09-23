import { Router } from "express";

export const router = Router();

router.get("/auth-admin", (req, res) => {
  console.log(req, res);
});
