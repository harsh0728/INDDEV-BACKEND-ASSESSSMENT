const User = require("../models/User");

// Get all users with pagination, search, and sort
const getUsers = async (req, res) => {
  try {
    const { page = 1, limit = 5, search = "", sort = "" } = req.query;
    const searchQuery = {
      $or: [
        { first_name: new RegExp(search, "i") },
        { last_name: new RegExp(search, "i") },
      ],
    };
    const sortQuery = sort
      ? { [sort.replace("-", "")]: sort.startsWith("-") ? -1 : 1 }
      : {};

    const users = await User.find(searchQuery)
      .sort(sortQuery)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ id: parseInt(req.params.id) });
    console.log("user with id", user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user by ID
const updateUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const updateData = req.body; // Assumes the request body contains the fields to update
    const user = await User.findOneAndUpdate({ id: userId }, updateData, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user by ID
const deleteUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await User.findOneAndDelete({ id: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).json({});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, createUser, getUserById, updateUser, deleteUser };
