// import mongoose from "mongoose"

// const connectDb=async ()=>{
//     try {
//         await mongoose.connect(process.env.MONGODB_URL)
//         console.log("db connected")
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default connectDb

import mongoose from "mongoose";
let isConnected = false;

const connectDb = async () => {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI, { /* options */ });
  isConnected = true;
};

export default connectDb;