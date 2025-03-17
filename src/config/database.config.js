import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connection reussi ! ✅`)
  } catch (err) {
    console.log(`Connection echouee ! ❌ ${err.message}`);
  }
};

export default connectDB();
