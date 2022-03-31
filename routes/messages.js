import express from "express";
const router = express.Router();

import {
  getAllMessages,
  createMessage,
  getMessage,
  updateMessage,
  deleteMessage,
} from "../controllers/messages.js";

router.route("/").get(getAllMessages).post(createMessage);
router.route("/:id").get(getMessage).patch(updateMessage).delete(deleteMessage);

export default router;
