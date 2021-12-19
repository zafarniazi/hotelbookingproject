const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    room: { type: String },
    roomid: { type: String },
    userid: { type: String },
    fromdate: { type: String },
    todate: { type: String },
    totalAmount: { type: Number },
    totalDays: { type: Number },

    transactionId: { type: String, required: true },
    status: { type: String, required: true, default: "booked" },
  },
  {
    timestamps: true,
  }
);

const bookingModel = mongoose.model("bookings", bookingSchema);

module.exports = bookingModel;
