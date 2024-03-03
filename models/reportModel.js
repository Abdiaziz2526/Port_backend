const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdDate: { type: Date, default: Date.now },
  isResolved: { type: Boolean, default: false }
  
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
