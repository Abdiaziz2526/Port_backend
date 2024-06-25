import mongoose from "mongoose";

const taxPaymentSchema = new mongoose.Schema({
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "business",
    required: true,
  },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, required: true },
  paymentMethod: {
    type: String,
    enum: [
      "credit card",
      "bank transfer",
      "check",
      "waafi",
      "premier wallet",
      "edahab",
      "EVC",
    ],
    required: true,
  },
  transactionId: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
},
{
  timestamps: true,
}
);

const TaxPayment = mongoose.model("taxPayment", taxPaymentSchema);

export default TaxPayment;
