const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const cors = require("cors");
const passport = require("passport");
require("dotenv").config()


//  MiddleWares
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

//  Import passport MiddleWare
require("./middleware/passport")(passport);

//  Connect Data Base
connectDB();

//  API Call
app.use("/articles", require("./routes/article"));
app.use("/users", require("./routes/article"));

//production


//  Define and Run the server
const port = process.env.PORT || 6800;
app.listen(port, (err) => {
  if (err) console.log("server not connected");
  else console.log("server is connected");
});
