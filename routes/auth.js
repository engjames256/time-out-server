import express from "express";
import { register, login, dashboard } from "../controllers/auth.js";
import { authToken, authUser, authRole } from "../middleware/auth.js";
import { ROLE } from "../permissions/role.js";

const router = express.Router();

router
  .route("/dashboard")
  .get(authToken, authUser, authRole(ROLE.MANAGER), dashboard);
router.post("/register", register);
router.post("/login", login);

export default router;
