import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true,},
  amount: { type: Number, required: true, trim: true,},
  price: { type: Number, required: true,},
  type: { type: String, required: true,},
  timestamps: true,
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;
