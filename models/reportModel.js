const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true },
  description: { 
    type: String 
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  taxes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Taxes",
    required: true,
  }],
 
  isResolved: { 
    type: Boolean, 
    default: false },
},{
  timestamps:true
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
