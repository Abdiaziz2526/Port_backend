import Messages from '../models/messagesModel.js';

// Get all messages rates
export const getAllMessages = async (req, res) => {
    try {
        const messages = await Messages.find().populate("sender");
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get tax rate by ID
export const getMessagesById = async (req, res) => {
    const { id } = req.params;
    try {
        const messages = await Messages.findById(id).populate("sender");
        if (!messages) {
            return res.status(404).json({ message: 'Message not found' });
        }
        res.status(200).json(taxRate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Register a new tax rate
export const registerNewMessages = async (req, res) => {
    const { sender, receiver, message } = req.body;
    const newMessages = new Messages({ sender, receiver, message });
    try {
        await newMessages.save();
        res.status(201).json(newMessages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an existing tax rate
export const updateMessage = async (req, res) => {
    const { id } = req.params;
    const { sender, receiver, message } = req.body;
    try {
        const updatedMessages = await Messages.findByIdAndUpdate(
            id,
            { sender, receiver, message },
            { new: true }
        );
        if (!updatedMessages) {
            return res.status(404).json({ message: 'Message not found' });
        }
        res.status(200).json(updatedMessages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a tax rate
export const deleteMessage = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedMessages = await Messages.findByIdAndDelete(id);
        if (!deletedMessages) {
            return res.status(404).json({ message: 'Message not found' });
        }
        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
