import mongoose from "mongoose";

const taxationSchema = mongoose.Schema(
  {
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "business",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    taxAmount: {
      type: Number,
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

const Taxation = mongoose.model("taxations", taxationSchema);

export default Taxation;
