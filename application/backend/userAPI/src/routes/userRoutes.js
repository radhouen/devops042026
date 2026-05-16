const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");

router.post("/register", userController.register);
router.post("/login", userController.login);

router.get("/users", auth, userController.getUsers);
router.put("/users/:id", auth, userController.updateUser);
router.delete("/users/:id", auth, userController.deleteUser);

module.exports = router;
