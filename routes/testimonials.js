import express from "express";
const router = express.Router();

import {
  getAllTestimonials,
  createTestimonial,
  getTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "../controllers/testimonials.js";

router.route("/").get(getAllTestimonials).post(createTestimonial);
router
  .route("/:id")
  .get(getTestimonial)
  .patch(updateTestimonial)
  .delete(deleteTestimonial);

export default router;
