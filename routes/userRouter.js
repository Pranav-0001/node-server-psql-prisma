import express from "express";
import { PrismaClient } from "@prisma/client";
import { signupValidationSchema } from "../validationSchema/signupVaidationSchema.js";
import { validateRequest } from "../helpers/validateRequest.js";
import { LoginController, signupController } from "../controllers/userController.js";
import { loginValidationSchema } from "../validationSchema/loginValidationSchema.js";
const router = express.Router();
const prisma = new PrismaClient();

router.post(
  "/signup",
  signupValidationSchema,
  validateRequest,
  signupController
);

router.post('/login',loginValidationSchema,validateRequest,LoginController)

export default router;
