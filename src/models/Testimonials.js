import mongoose from "mongoose";

const TestimonialsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
  },
  serviceTaken: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    // 0 => deactive
    // 1 => active
  },
});

export default mongoose.models.Testimonials ||
  mongoose.model("Testimonials", TestimonialsSchema);
