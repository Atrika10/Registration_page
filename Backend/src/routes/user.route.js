import { Router } from "express";
import { getUserDetailsByTime, loginUser, registerUser } from "../controllers/user.controller.js";
const router = Router();

//router.route("/register").post(registerUser); 
router.post("/register",registerUser);
router.post("/login", loginUser);
router.post("/details", getUserDetailsByTime);

//router.route("/login").post(controllerName)

export default router;