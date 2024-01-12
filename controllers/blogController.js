import { PrismaClient } from "@prisma/client";
import { matchedData } from "express-validator";
const prisma = new PrismaClient();
export const createBlog = async (req, res) => {
  try {
    const requestData = matchedData(req);
    const createdBlog = await prisma.blog.create({
      data: {
        text: requestData.text,
        creatorId: requestData.creatorId,
        title: requestData.title,
      },
    });
    res.json({ status: true, createdBlog });
  } catch (error) {}
};

export const getBlogById = async (req, res) => {
  try {
    const requestData = matchedData(req);
    const blog = await prisma.blog.findFirst({
      where: {
        id: requestData.id,
      },
      include: {
        creator: true,
      },
    });
    res.json({ status: true, blog });
  } catch (error) {}
};

export const getBlogsByUserId = async (req, res) => {
  try {
    const requestData = matchedData(req);
    const blogs = await prisma.blog.findMany({
      where: {
        creatorId: requestData.id,
      },
      include: {
        creator: true,
      },
    });
    res.json({ status: true, blogs });
  } catch (error) {}
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({ include: { creator: true } });
    res.json({ status: true, blogs });
  } catch (error) {}
};
