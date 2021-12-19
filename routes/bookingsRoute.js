const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Booking = require("../models/booking");
const Room = require("../models/room");
router.post("/bookroom", async (req, res) => {
  const { room, userid, fromdate, todate, totalamount, totaldays } = req.body;
  try {
    const newbooking = new Booking({
      room: 1,
      roomid: 1,
      userid,
      fromdate,
      todate,
      totalamount,
      totaldays,
      transactionId: "1234",
    });

    const booking = await newbooking.save();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong" + error });
  }
});
module.exports = router;
