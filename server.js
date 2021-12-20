const express = require("express");
const app = express();
const port = 5000;
const bdconfig = require("./db");
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
