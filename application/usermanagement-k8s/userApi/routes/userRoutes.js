/* import { Router } from "express";
import {
  register,
  login,
  getUsers,
  updateUser,
  deleteUser,
} from "../src/controllers/userController.js";
import auth from "../src/middleware/authMiddleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get("/users", auth, getUsers);
router.put("/users/:id", auth, updateUser);
router.delete("/users/:id", auth, deleteUser);

export default router;
 */

import { Router } from "express";
import {
  register,
  login,
  getUsers,
  updateUser,
  deleteUser,
} from "../src/controllers/userController.js";
// On peut laisser l'import, mais on commente ou retire "auth" pour le test
import auth from "../src/middleware/authMiddleware.js";

const router = Router();

// 1. Pour l'ajout (S'enregistrer)
router.post("/users", register); // Modifié de "/register" à "/users" pour correspondre à ton React !
router.post("/login", login);

// 2. Pour l'affichage et la suppression (Sans le middleware "auth" le temps du test)
router.get("/users", getUsers);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
