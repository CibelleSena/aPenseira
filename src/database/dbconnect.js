const MONGO_DATABASE = process.env.MONGO_DATABASE;
const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect(MONGO_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database conect");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connect
};