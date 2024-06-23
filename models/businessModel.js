import mongoose from "mongoose";


const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zip: String,
    country: { type: String, default: 'Somalia' },
  }, { _id: false });
const businessEntitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  logo: { type: String },
  type: {
    type: String,
    enum: ["Limited Liability Company (LLC)", "Sole Proprietorship", " Cooperative", "Non-Governmental Organizations (NGOs) and Non-Profits", " Corporation", " Partnership"],
    required: true,
  },
  address: addressSchema,
  minIncome:{ type: Number, required: true } ,
  maxIncome: { type: Number, required: true },
  taxIdentificationNumber: { type: String, required: true, unique: true },
});

const Business = mongoose.model("business", businessEntitySchema);

export default Business;
