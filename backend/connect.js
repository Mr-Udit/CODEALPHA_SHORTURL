import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
