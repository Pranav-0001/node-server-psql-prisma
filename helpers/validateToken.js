import jwt from "jsonwebtoken";

export const validateToken = (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(" ");
    if (token.length !== 2)
      res.json({ status: false, error: "Invalid token formate" });
    else {
      const user = jwt.decode(token[1], process.env.JWT_KEY);
      req.user=user
      next()
    }
  } catch (error) {
    res.json({ status: false, error });
  }
};
