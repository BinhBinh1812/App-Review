const User = require("../models/User");

const userController = {
  //get all user
  getAllUsers: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //Get user with phonenumber
  getUserWithPhoneNumber: async (req, res) => {
    try {
      const user = await User.findOne({ phonenumber: req.body.phonenumber });
      if (!user) {
        res.status(404).json("Can not found!");
      }
      if (user) {
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get friends
  getFriends: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      const friends = await Promise.all(
        user.followings.map((friendId) => {
          return User.findById(friendId);
        })
      );
      let friendList = [];
      friends.map((friend) => {
        const { _id, username, profilePicture } = friend;
        friendList.push({ _id, username, profilePicture });
      });
      res.status(200).json(friendList);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //delete user
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully!");
    } catch (error) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
