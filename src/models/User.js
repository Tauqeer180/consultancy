import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: Number,
    default: 1,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
