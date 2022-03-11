import Coupon from "../models/coupons.js";
import asyncWrapper from "../middleware/async.js";
import { createCustomError } from "../errors/custom-error.js";
import { scopedCoupons } from "../permissions/coupons.js";

export const getAllCoupons = asyncWrapper(async (req, res) => {
  const coupons = await Coupon.find({});
  // res.status(200).json(scopedCoupons(req.user, coupons));
  res.status(200).json({ coupons });
});

export const createCoupon = asyncWrapper(async (req, res) => {
  const coupon = await Coupon.create(req.body);
  res.status(201).json({ poupon });
});

export const getCoupon = asyncWrapper(async (req, res, next) => {
  const { id: couponID } = req.params;
  const coupon = await Coupon.findOne({ _id: couponID });
  if (!coupon) {
    return next(createCustomError(`No coupon with id: ${couponID}`, 404));
  }
  res.status(200).json({ coupon });
});

export const deleteCoupon = asyncWrapper(async (req, res) => {
  const { id: couponID } = req.params;
  const coupon = await Coupon.findOneAndDelete({ _id: couponID });
  if (!coupon) {
    return next(createCustomError(`No coupon with id: ${couponID}`, 404));
  }
  res.status(200).json({ coupon });
});

export const updateCoupon = asyncWrapper(async (req, res) => {
  const { id: couponID } = req.params;
  const coupon = await Coupon.findByIdAndUpdate({ _id: couponID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!coupon) {
    return next(createCustomError(`No coupon with id: ${couponID}`, 404));
  }
  res.status(200).json({ coupon });
});
