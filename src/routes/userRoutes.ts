import { Router } from "express";
import UserController from "../controllers/user";
import validator from "../middlewares/validator";
import { validateSignup, validateLogin } from "../validations/users";

const router = Router();

const {
  register, login
} = UserController;

router.post("/register", validator(validateSignup), register);
router.post("/login", validator(validateLogin), login);

export default router;
