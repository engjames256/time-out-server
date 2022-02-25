import express from "express";
const router = express.Router();

import {
  getAllNewsletters,
  createNewsletter,
  getNewsletter,
  updateNewsletter,
  deleteNewsletter,
} from "../controllers/newsletters.js";

router.route("/").get(getAllNewsletters).post(createNewsletter);
router
  .route("/:id")
  .get(getNewsletter)
  .patch(updateNewsletter)
  .delete(deleteNewsletter);

export default router;
