import express from "express";
const router = express.Router();

import {
  getAllReservations,
  createReservation,
  getReservation,
  updateReservation,
  deleteReservation,
} from "../controllers/reservations.js";

router.route("/").get(getAllReservations).post(createReservation);
router
  .route("/:id")
  .get(getReservation)
  .patch(updateReservation)
  .delete(deleteReservation);

export default router;
