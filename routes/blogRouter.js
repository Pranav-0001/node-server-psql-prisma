import { PrismaClient } from "@prisma/client";
import express from "express";
import { createBlogValidationSchema } from "../validationSchema/createBlogValidationSchema.js";
import { validateRequest } from "../helpers/validateRequest.js";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  getBlogsByUserId,
} from "../controllers/blogController.js";
import { validateToken } from "../helpers/validateToken.js";
import { getBlogsByIdValidationSchema } from "../validationSchema/getBlogByIdValidationSchema.js";
import { getBlogsByUserIdValidationSchema } from "../validationSchema/getBlogsByUserIdValidationSchema.js";

const router = express.Router();
const prisma = new PrismaClient();

router.post(
  "/createBlog",
  validateToken,
  createBlogValidationSchema,
  validateRequest,
  createBlog
);

router.get(
  "/getBlogById/:id",
  validateToken,
  getBlogsByIdValidationSchema,
  validateRequest,
  getBlogById
);

router.get(
  "/getBlogByuserId/:id",
  validateToken,
  getBlogsByUserIdValidationSchema,
  validateRequest,
  getBlogsByUserId
);

router.get("/getallblogs", getAllBlogs);

export default router;
