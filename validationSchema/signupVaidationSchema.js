import { body } from "express-validator"
export const signupValidationSchema=[
    body("username").notEmpty().withMessage("username can't be empty"),
    body("password").notEmpty().withMessage("Password can't be empty")
]