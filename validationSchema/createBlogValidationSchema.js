import { body } from "express-validator"
export const createBlogValidationSchema=[
    body("creatorId").notEmpty(),
    body("title").notEmpty().withMessage("title can't be empty"),
    body("text").notEmpty().withMessage("text can't be empty"),
]