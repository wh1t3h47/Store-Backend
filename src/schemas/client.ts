import mongoose = require("mongoose");
const { Schema, model } = mongoose;

const clientSchema = new Schema({
  name: { type: String, required: true },
  cpf: { type: String, required: false, default: null },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
});

const client = model("client", clientSchema);

export default {
  client,
}