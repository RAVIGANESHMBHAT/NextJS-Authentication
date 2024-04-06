import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDb connected");
    });

    connection.on("error", (error) => {
      console.log("MongoDb connection error !", error);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong in connecting to Db.");
    console.log(error);
  }
}
