import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
const router = Router();

//router.route("/register").post(registerUser); 
router.post("/register",registerUser);
router.post("/login", loginUser);

//router.route("/login").post(controllerName)

export default router;