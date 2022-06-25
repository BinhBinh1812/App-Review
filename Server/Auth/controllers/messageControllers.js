const Message = require("../models/Message");

const messageControllers = {
	//ADD NEW MESSAGE
	createMessage: async (req, res) => {
		const newMessage = new Message(req.body);

		try {
			const savedMessage = await newMessage.save();
			res.status(200).json(savedMessage);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	//GET MESSAGE
	getMessage: async (req, res) => {
		try {
			const messages = await Message.find({
				conversationId: req.params.conversationId,
			});
			res.status(200).json(messages);
		} catch (error) {
			res.status(500).json(error);
		}
	},
};

module.exports = messageControllers;
