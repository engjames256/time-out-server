import express from "express";
const router = express.Router();

import {
  getAllMessages,
  createMessage,
  getMessage,
  updateMessage,
  deleteMessage,
} from "../controllers/Messages.js";

router.route("/").get(getAllMessages).post(createMessage);
router.route("/:id").get(getMessage).patch(updateMessage).delete(deleteMessage);

export default router;
