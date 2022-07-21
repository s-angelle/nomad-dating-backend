const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    inStock: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
