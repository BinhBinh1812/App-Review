const router = require("express").Router();
const messageControllers = require("../controllers/messageControllers");

router.post("/", messageControllers.createMessage);
router.get("/:conversationId", messageControllers.getMessage);

module.exports = router;
