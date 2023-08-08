// connection to mongoose

import mongoose from "mongoose";

let isConnect = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MongoDB URL Not Found!");
  if (isConnect) return console.log("Database Connected Successfully!");

  try {
    mongoose.connect(process.env.MONGODB_URL);
    isConnect = true;
    console.log("Database Connected Successfully");
  } catch (err) {
    console.log(err);
  }
};
