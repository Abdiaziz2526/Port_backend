const mongoose = require("mongoose");
const { default: ratingSchema } = require("./ratingModel.js");

const taxesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
    default: 0,
  },
  rating: [ratingSchema],

  description: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const Taxes = mongoose.model("Taxes", taxesSchema)

export default  Taxes;
