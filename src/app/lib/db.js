import mongoose from "mongoose";

global.mongoose = {
  promise: null,
  conn: null,
};

export async function dbConnect() {
  if (global.mongoose && global.mongoose.conn) {
    return global.mongoose.conn;
  } else {
    const conString =
      "mongodb+srv://halmadanidev:haroon2003@cluster0.52ggmj2.mongodb.net/Workouts";
    const promise = mongoose.connect(conString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    global.mongoose = {
      conn: await promise,
      promise,
    };
    return await promise;
  }
}
