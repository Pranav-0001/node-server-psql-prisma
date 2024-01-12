import { PrismaClient } from "@prisma/client";
import { matchedData } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export const signupController = async (req, res) => {
  try {
    const requestData = matchedData(req);
    const password = await bcrypt.hash(requestData.password, 10);
    const user = await prisma.user.create({
      data: {
        username: requestData.username,
        password: password,
      },
    });
    res.json({ user });
  } catch (error) {
    if (error.code === "P2002") {
      res.json({ status: false, error: "Username already exists" });
    } else console.log({ error });
  }
};

export const LoginController = async (req, res) => {
  try {
    const requestData = matchedData(req);
    const user = await prisma.user.findFirst({
      where: {
        username: requestData.username,
      },
    });
    if (!user) {
      res.json({ status: false, error: "Username not found" });
    } else {
      if (!(await bcrypt.compare(requestData.password, user.password))) {
        res.json({ status: true, error: "Invalid Password" });
      } else {
        const token = jwt.sign({ user }, process.env.JWT_KEY);

        res.json({ status: true, user, token });
      }
    }
    // res.json({ user });
  } catch (error) {
    if (error.code === "P2002") {
      res.json({ status: false, error: "Username already exists" });
    } else console.log({ error });
  }
};
