import mongoose from "mongoose";

const ContactUsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.ContactUs ||
  mongoose.model("ContactUs", ContactUsSchema);
