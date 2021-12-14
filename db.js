const mongoose = require("mongoose");

var mongoDBURL =
  "mongodb+srv://zafar80804:zafar80804@cluster0.ftvx9.mongodb.net/mern-rooms";
mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var dbconnect = mongoose.connection;

dbconnect.on("error", () => {
  console.log(`Mongo DB Connection Failed`);
});

dbconnect.on("connected", () => {
  console.log(`Mongo DB Connection Successfull`);
});

module.exports = mongoose;
