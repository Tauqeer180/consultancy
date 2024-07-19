// lib/mongodb.js
import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    console.log("Mongoose ", mongoose?.connections[0].readyState);
    if (mongoose.connections[0].readyState) {
      console.log("already connected");
      return;
    }
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // console.log("connected now ", conn);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("May be IP is not whitelisted");
  }
};

export default connectMongo;
