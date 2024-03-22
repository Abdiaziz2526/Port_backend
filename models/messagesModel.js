const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: { 
    type: String, 
    required: true },
  sentAt: { 
    type: Date, 
    default: Date.now },
  isRead: { 
    type: Boolean, 
    default: false },
});

const Messages = mongoose.model("Messages", messagesSchema);

module.exports = Messages;
