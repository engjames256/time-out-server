import mongoose from "mongoose";
import Inc from "mongoose-sequence";
const AutoIncrement = Inc(mongoose);

const messageSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    message: {
      type: String,
      required: [true, "Must provide Message"],
    },
  },
  {
    timestamps: true,
  }
);

messageSchema.plugin(AutoIncrement, {
  id: "message_seq",
  inc_field: "id",
});

const message = mongoose.model("message", messageSchema);

export default message;
