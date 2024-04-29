import mongoose from 'mongoose';
import ratingSchema from './ratingModel.js';

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
});

const Taxes = mongoose.model("taxes", taxesSchema);

export default Taxes;
