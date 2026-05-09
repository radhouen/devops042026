const pool = require("../config/db");

// CREATE
const createUser = (username, email, password) => {
  return pool.query(
    "INSERT INTO users (username, email, password) VALUES ($1,$2,$3) RETURNING *",
    [username, email, password]
  );
};

// FIND BY EMAIL
const findByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  return result;
};

// GET ALL
const getAllUsers = () => {
  return pool.query("SELECT id, username, email, created_at FROM users");
};

// UPDATE
const updateUser = (id, username, email, password) => {
  return pool.query(
    "UPDATE users SET username=$1, email=$2, password=$3 WHERE id=$4 RETURNING *",
    [username, email, password, id]
  );
};

// DELETE
const deleteUser = (id) => {
  return pool.query("DELETE FROM users WHERE id=$1", [id]);
};

module.exports = {
  createUser,
  findByEmail,
  getAllUsers,
  updateUser,
  deleteUser,
};
