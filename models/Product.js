// models/Product.js
import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
  name: String,
  sku: String,
  additionalCost: Number,
  stockCount: Number,
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  variants: [variantSchema],
});

export const Product = mongoose.model('Product', productSchema);
