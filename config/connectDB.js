const mongoose = require("mongoose");
const config = require("config");
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    })
    .then(() => console.log("MongoDB database connection established successfully ..."))
    .catch((err) => console.log(err));
};
module.exports = connectDB;
