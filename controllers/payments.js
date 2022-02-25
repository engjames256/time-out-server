import Payment from "../models/payments.js";
import asyncWrapper from "../middleware/async.js";

export const getAllPayments = asyncWrapper(async (req, res) => {
  const payments = await Payment.find({});
  res.status(200).json({ payments});
});

export const createPayment = asyncWrapper(async (req, res) => {
  const payment = await Payment.create(req.body);
  res.status(201).json({ payment});
});

export const getPayment = asyncWrapper(async (req, res) => {
  const { id: paymentID } = req.params;
  const payment = await Payment.findOne({ _id: paymentID });
  if (!payment) {
    return res.status(404).json({ msg: `No payment with id: ${paymentID}` });
  }
  res.status(200).json({ payment});
});

export const deletePayment = asyncWrapper(async (req, res) => {
  const { id: paymentID } = req.params;
  const payment = await Payment.findOneAndDelete({ _id: paymentID });
  if (!payment) {
    return res.status(404).json({ msg: `No payment with id: ${paymentID}` });
  }
  res.status(200).json({ payment});
});

export const updatePayment = asyncWrapper(async (req, res) => {
  const { id: paymentID } = req.params;

  const payment = await Payment.findByIdAndUpdate({ _id: paymentID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!payment) {
    return res.status(404).json({ msg: `No payment with id: ${paymentID}` });
  }

  res.status(200).json({ payment});
});
