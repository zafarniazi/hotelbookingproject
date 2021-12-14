const express = require("express");
const app = express();
const port = 5000;
const bdconfig = require("./db");
const roomsRoute = require("./routes/roomRoutes");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/rooms", roomsRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
