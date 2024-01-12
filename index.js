import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js"
import blogRouter from "./routes/blogRouter.js"
dotenv.config();
const app = express();

app.use(express.json())

app.use('/',userRouter)
app.use('/blog',blogRouter)


app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT ${process.env.PORT}`);
});
