const router = require("express").Router();
const userController = require("../controllers/userControllers");

router.get("/", userController.getAllUsers);
router.post("/find", userController.getUserWithPhoneNumber);
router.get("/friends/:userId", userController.getFriends);
router.delete("/:id", userController.deleteUser);

module.exports = router;
