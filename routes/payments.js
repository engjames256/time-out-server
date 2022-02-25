import express from "express";
const router = express.Router();

import {
  getAllPayments,
  createPayment,
  getPayment,
  updatePayment,
  deletePayment,
} from "../controllers/payments.js";

router.route("/").get(getAllPayments).post(createPayment);
router.route("/:id").get(getPayment).patch(updatePayment).delete(deletePayment);

export default router;
