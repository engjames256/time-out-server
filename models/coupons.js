import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: [true, "Must provide coupon Name"],
    minlength: [12, "coupon name must be at least 12 characters"],
    unique: true,
  },
  value: {
    type: String,
    required: [true, "Must provide Coupon Value"],
    minlength: [12, "Coupon Value must be at least 12 characters"],
  },
  price: {
    type: Number,
    required: [true, "Must provide Product Price"],
  },
  type: {
    type: String,
    enum: ["Ordinary", "VIP"],
    default: "Ordinary",
  },
});

const coupon = mongoose.model("coupon", couponSchema);

export default coupon;
