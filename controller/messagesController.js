import Messages from '../models/messagesModel.js';

// Get all messages 
export const getAllMessages = async (req, res) => {
    try {
        const messages = await Messages.find().populate("sender").populate("business");
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get all messages 
export const getMyMessages = async (req, res) => {
    try {
        const messages = await Messages.find({business: req.params.id }).populate("sender").populate("business");
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get messages by ID
export const getMessagesById = async (req, res) => {
    const { id } = req.params;
    try {
        const messages = await Messages.findById(id).populate("sender").populate("business");
        if (!messages) {
            return res.status(404).json({ message: 'Message not found' });
        }
        res.status(200).json(taxRate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Register a new messages
export const registerNewMessages = async (req, res) => {
    const { sender,business, receiver, message } = req.body;
    const newMessages = new Messages({ sender,business, receiver, message });
    try {
        await newMessages.save();
        res.status(201).json(newMessages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an existing messages
export const updateMessage = async (req, res) => {
    const { id } = req.params;
    const { sender, business, receiver, message } = req.body;
    try {
        const updatedMessages = await Messages.findByIdAndUpdate(
            id,
            { sender,business, receiver, message },
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

// Delete a messages
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
