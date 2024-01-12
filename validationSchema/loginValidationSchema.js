import { body } from "express-validator"
export const loginValidationSchema=[
    body("username").notEmpty().withMessage("username can't be empty"),
    body("password").notEmpty().withMessage("Password can't be empty")
]