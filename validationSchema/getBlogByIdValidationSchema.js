import { param } from "express-validator";

export const getBlogsByIdValidationSchema = [
  param("id").notEmpty().withMessage("Blog id is required"),
];
