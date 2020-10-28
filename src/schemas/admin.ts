import mongoose = require("mongoose");
const { Schema, model } = mongoose;


const adminSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: false, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const admin = model("admin", adminSchema);

export default {
  admin,
};
