// import { authUser, authToken } from "../middleware/auth.js";
// import { canViewCoupon } from "../permissions/coupons.js";

import express from "express";
const router = express.Router();

import {
  getAllCoupons,
  createCoupon,
  getCoupon,
  updateCoupon,
  deleteCoupon,
} from "../controllers/coupons.js";

router.route("/").get(getAllCoupons).post(createCoupon);
router.route("/:id").get(getCoupon).patch(updateCoupon).delete(deleteCoupon);

export default router;
