import mongoose from "mongoose";

const taxPaymentSchema = new mongoose.Schema({
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "business",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  transaction: {
    type: String,
    required: true,
  },
  isPaid: {
    type: Boolean,
    required: true,
    default:false
},
},
  {
    timestamps: true,
  }
);

const TaxPayment = mongoose.model("taxPayment", taxPaymentSchema);

export default TaxPayment;
