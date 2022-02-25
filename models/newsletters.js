import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema({
  newsletter: {
    type: String,
    required: [true, "Must provide Newsletter"],
  },
});

const newsletter = mongoose.model("newsletter", newsletterSchema);

export default newsletter;
