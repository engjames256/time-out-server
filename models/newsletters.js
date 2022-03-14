import mongoose from "mongoose";
import Inc from "mongoose-sequence";
const AutoIncrement = Inc(mongoose);

const newsletterSchema = new mongoose.Schema(
  {
    newsletterId: {
      type: Number,
    },
    newsletter: {
      type: String,
      required: [true, "Must provide Newsletter"],
    },
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
