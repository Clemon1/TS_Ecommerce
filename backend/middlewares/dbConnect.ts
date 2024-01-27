import mongoose from "mongoose";

export const dbConnect = async (url: string): Promise<void> => {
  try {
    await mongoose.connect(url);
    console.log("Connected to database");
  } catch (err: any) {
    console.log("Could not connect to database", err.message);
  }
};
