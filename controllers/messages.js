import Message from "../models/messages.js";
import asyncWrapper from "../middleware/async.js";

export const getAllMessages = asyncWrapper(async (req, res) => {
  const messages = await Message.find({});
  res.status(200).json({ messages });
});

export const createMessage = asyncWrapper(async (req, res) => {
  const message = await Message.create(req.body);
  res.status(201).json({ message });
});

export const getMessage = asyncWrapper(async (req, res) => {
  const { id: messageID } = req.params;
  const message = await Message.findOne({ _id: messageID });
  if (!message) {
    return res.status(404).json({ msg: `No message with id: ${messageID}` });
  }
  res.status(200).json({ message });
});

export const deleteMessage = asyncWrapper(async (req, res) => {
  const { id: messageID } = req.params;
  const message = await Message.findOneAndDelete({ _id: messageID });
  if (!message) {
    return res.status(404).json({ msg: `No message with id: ${messageID}` });
  }
  res.status(200).json({ message });
});

export const updateMessage = asyncWrapper(async (req, res) => {
  const { id: messageID } = req.params;

  const message = await Message.findByIdAndUpdate(
    { _id: messageID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!message) {
    return res.status(404).json({ msg: `No message with id: ${messageID}` });
  }

  res.status(200).json({ message });
});
