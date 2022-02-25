import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  reservation: {
    type: String,
    required: [true, "Must provide Reservation"],
  },
});

const reservation = mongoose.model("reservation", reservationSchema);

export default reservation;
