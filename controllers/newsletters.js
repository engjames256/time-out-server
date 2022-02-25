import Newsletter from "../models/newsletters.js";
import asyncWrapper from "../middleware/async.js";

export const getAllNewsletters = asyncWrapper(async (req, res) => {
  const newsletters = await Newsletter.find({});
  res.status(200).json({ newsletters });
});

export const createNewsletter = asyncWrapper(async (req, res) => {
  const newsletter = await Newsletter.create(req.body);
  res.status(201).json({ newsletter });
});

export const getNewsletter = asyncWrapper(async (req, res) => {
  const { id: newsletterID } = req.params;
  const newsletter = await Newsletter.findOne({ _id: newsletterID });
  if (!newsletter) {
    return res
      .status(404)
      .json({ msg: `No newsletter with id: ${newsletterID}` });
  }
  res.status(200).json({ newsletter });
});

export const deleteNewsletter = asyncWrapper(async (req, res) => {
  const { id: newsletterID } = req.params;
  const newsletter = await Newsletter.findOneAndDelete({ _id: newsletterID });
  if (!newsletter) {
    return res
      .status(404)
      .json({ msg: `No newsletter with id: ${newsletterID}` });
  }
  res.status(200).json({ newsletter });
});

export const updateNewsletter = asyncWrapper(async (req, res) => {
  const { id: newsletterID } = req.params;

  const newsletter = await Newsletter.findByIdAndUpdate(
    { _id: newsletterID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!newsletter) {
    return res
      .status(404)
      .json({ msg: `No newsletter with id: ${newsletterID}` });
  }

  res.status(200).json({ newsletter });
});
