const router = require("express").Router();
const conversationController = require("../controllers/conversationControllers");

router.post("/", conversationController.createConversation);
router.get("/:userId", conversationController.getConversationOfUser);
router.get(
  "/find/:firstUserId/:secondUserId",
  conversationController.getConversationTwoUser
);

module.exports = router;
