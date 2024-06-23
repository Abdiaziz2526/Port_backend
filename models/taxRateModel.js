import mongoose from "mongoose";

const taxRateSchema = mongoose.Schema({
  minIncome: Number,
  maxIncome: Number,
  rate: Number,
});

const TaxRate = mongoose.model("TaxRate", taxRateSchema);

export default TaxRate;
