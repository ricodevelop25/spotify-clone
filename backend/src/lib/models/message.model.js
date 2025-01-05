import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: { type: String, required: true },
    recieveId: { type: String, required: true },   
    contentId: { type: String, required: true },
  },
  { timestamps: true}
);

export const Message = mongoose.model("Message", messageSchema);