const express = require("express");
const {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/users", getUsers); // route for getting the user details
router.post("/users", createUser); // route for posting or creating new user
router.get("/users/:id", getUserById); // route for getting user by their id
router.put("/users/:id", updateUser); // route for updating the user details
router.delete("/users/:id", deleteUser); // route for deleting user details with their id

module.exports = router;
