const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sentAt: {
    type: Date,
    default: Date.now,
  },
},
  {
    timestamps: true,
  }
);

const Messages = mongoose.model("messages", messagesSchema);

export default Messages;
