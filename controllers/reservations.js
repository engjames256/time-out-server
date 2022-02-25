import Reservation from "../models/reservations.js";
import asyncWrapper from "../middleware/async.js";

export const getAllReservations = asyncWrapper(async (req, res) => {
  const reservations = await Reservation.find({});
  res.status(200).json({ reservations });
});

export const createReservation = asyncWrapper(async (req, res) => {
  const reservation = await Reservation.create(req.body);
  res.status(201).json({ reservation });
});

export const getReservation = asyncWrapper(async (req, res) => {
  const { id: reservationID } = req.params;
  const reservation = await Reservation.findOne({ _id: reservationID });
  if (!reservation) {
    return res
      .status(404)
      .json({ msg: `No reservation with id: ${reservationID}` });
  }
  res.status(200).json({ reservation });
});

export const deleteReservation = asyncWrapper(async (req, res) => {
  const { id: reservationID } = req.params;
  const reservation = await Reservation.findOneAndDelete({
    _id: reservationID,
  });
  if (!reservation) {
    return res
      .status(404)
      .json({ msg: `No reservation with id: ${reservationID}` });
  }
  res.status(200).json({ reservation });
});

export const updateReservation = asyncWrapper(async (req, res) => {
  const { id: reservationID } = req.params;

  const reservation = await Reservation.findByIdAndUpdate(
    { _id: reservationID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!reservation) {
    return res
      .status(404)
      .json({ msg: `No reservation with id: ${reservationID}` });
  }

  res.status(200).json({ reservation });
});
