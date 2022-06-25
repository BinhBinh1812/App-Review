const Conversation = require("../models/Conversation");

const conversationController = {
	// NEW CONVERSATION

	createConversation: async (req, res) => {
		const newConversation = new Conversation({
			members: [req.body.senderId, req.body.receiverId],
		});

		try {
			const savedConversation = await newConversation.save();
			res.status(200).json(savedConversation);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// GET CONVERSATION OF USER
	getConversationOfUser: async (req, res) => {
		try {
			const conversation = await Conversation.find({
				members: { $in: [req.params.userId] },
			});
			res.status(200).json(conversation);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// GET CONVERSATION INCLUDES TWO USER

	getConversationTwoUser: async (req, res) => {
		try {
			const conversation = await Conversation.findOne({
				members: { $all: [req.params.firstUserId, req.params.secondUserId] },
			});
			res.status(200).json(conversation);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};

module.exports = conversationController;
