import mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true},
  stock_qty: { type: Number, required: true },
});

productSchema.virtual("productId").get(function (this: any) {
  return this._id;
});

const product = model("product", productSchema);

export default {
  product,
};
