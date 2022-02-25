import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, "Must provide Message"],
  },
});

const message = mongoose.model("message", messageSchema);

export default message;
