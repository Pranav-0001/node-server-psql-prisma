import express from "express";
import { PrismaClient } from "@prisma/client";
const router = express.Router();
const prisma = new PrismaClient();

router.post("/signup", async(req, res) => {
  try {
    console.log({req:req.body});
    const user = await prisma.user.create({
        data: {
            username:req.body.username,
            password:req.body.password
        }
    })
    res.json({user})
  } catch (error) {
    
    if(error.code==="P2002"){
        res.json({status:false,error:"Username already exists"})
    }
    else console.log({ error });
    
  }
});

export default router;
