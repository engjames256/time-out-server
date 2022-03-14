import mongoose from "mongoose";
import Inc from "mongoose-sequence";
const AutoIncrement = Inc(mongoose);

const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
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
  },

  {
    timestamps: true,
  }
);

productSchema.plugin(AutoIncrement, {
  id: "product_seq",
  inc_field: "id",
});

const product = mongoose.model("product", productSchema);

export default product;
