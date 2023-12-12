import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export default connectToDb;
