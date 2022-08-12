const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to MONGODB");
  } catch (err) {
    throw err;
    process.exit();
  }
};

module.exports = connectDB;
