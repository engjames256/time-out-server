import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide Product Name"],
    minlength: [3, "Product name must be at least 3 characters"],
  },
  description: {
    type: String,
    required: [true, "Must provide Product Description"],
    minlength: [20, "Product Name must be at least 20 characters"],
  },
  price: {
    type: Number,
    required: [true, "Must provide Product Price"],
  },
});

const product = mongoose.model("product", productSchema);

export default product;
