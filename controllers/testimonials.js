import Testimonial from "../models/testimonials.js";
import asyncWrapper from "../middleware/async.js";

export const getAllTestimonials = asyncWrapper(async (req, res) => {
  const testimonails = await Testimonial.find({});
  res.status(200).json({ testimonails });
});

export const createTestimonial = asyncWrapper(async (req, res) => {
  const testimonial = await Testimonial.create(req.body);
  res.status(201).json({ testimonial });
});

export const getTestimonial = asyncWrapper(async (req, res) => {
  const { id: testimonialID } = req.params;
  const testimonial = await Testimonial.findOne({ _id: testimonialID });
  if (!testimonial) {
    return res
      .status(404)
      .json({ msg: `No testimonial with id: ${testimonialID}` });
  }
  res.status(200).json({ testimonial });
});

export const deleteTestimonial = asyncWrapper(async (req, res) => {
  const { id: testimonialID } = req.params;
  const testimonial = await Testimonial.findOneAndDelete({
    _id: testimonialID,
  });
  if (!testimonial) {
    return res
      .status(404)
      .json({ msg: `No message with id: ${testimonialID}` });
  }
  res.status(200).json({ testimonial });
});

export const updateTestimonial = asyncWrapper(async (req, res) => {
  const { id: testimonialID } = req.params;

  const testimonial = await Testimonial.findByIdAndUpdate(
    { _id: testimonialID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!testimonial) {
    return res
      .status(404)
      .json({ msg: `No message with id: ${testimonialID}` });
  }

  res.status(200).json({ testimonial });
});
