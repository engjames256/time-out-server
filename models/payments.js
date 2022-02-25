import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: [true, "Must provide Product Price"],
  },
});

const payment = mongoose.model("payment", paymentSchema);

export default payment;
