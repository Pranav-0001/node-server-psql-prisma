import { param } from "express-validator";

export const getBlogsByUserIdValidationSchema = [
  param("id").notEmpty().withMessage("User id is required"),
];
