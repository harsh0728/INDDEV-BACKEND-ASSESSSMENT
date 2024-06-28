const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  company_name: String,
  age: { type: Number, required: true },
  city: String,
  state: String,
  zip: Number,
  email: { type: String, required: true, unique: true },
  web: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
