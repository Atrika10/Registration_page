import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
const router = Router();

//router.route("/register").post(registerUser); 
router.post("/register",registerUser);

//router.route("/login").post(controllerName)

export default router;