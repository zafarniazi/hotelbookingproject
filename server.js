const express = require("express");
const app = express();
const port = 5000;
const bdconfig = require("./db");
const path = require("path");
const roomsRoute = require("./routes/roomRoutes");
const usersRoute = require("./routes/userRoute");
const bookingsRoute = require("./routes/bookingsRoute");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/booking", bookingsRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node JS Server Started`));
