import mongoose from "mongoose";
import Inc from "mongoose-sequence";
const AutoIncrement = Inc(mongoose);

const newsletterSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    newsletter: {
      type: String,
      required: [true, "Must provide Newsletter"],
    },
    username: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

newsletterSchema.plugin(AutoIncrement, {
  id: "newsletter_seq",
  inc_field: "id",
});

const newsletter = mongoose.model("newsletter", newsletterSchema);

export default newsletter;
