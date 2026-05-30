import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

// REGISTER
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await userModel.findByEmail(email);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.createUser(username, email, hashedPassword);

    res.status(201).json(user.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findByEmail(email);

    if (!user.rows || user.rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const dbUser = user.rows[0];

    if (!dbUser.password) {
      return res.status(500).json({
        message: "Password missing in database result",
      });
    }

    const validPassword = await bcrypt.compare(password, dbUser.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: dbUser.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL USERS
export const getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE USER
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await userModel.updateUser(
      id,
      username,
      email,
      hashedPassword
    );

    res.json(updatedUser.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE USER
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.deleteUser(id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
