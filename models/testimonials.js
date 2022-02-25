import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  testimonial: {
    type: String,
    required: [true, "Must provide testimonial"],
  },
});

const testimonial = mongoose.model("testimonial", testimonialSchema);

export default testimonial;
