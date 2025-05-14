import { RequestHandler } from "express";
import { auth } from "../config/firebaseConfig";

export const authMiddleware: RequestHandler = async (req, res, next) => {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) {
    res.status(401).json({ message: "No token provided" });
    return; // stop di sini, tidak return Response
  }

  try {
    const decodedToken = await auth.verifyIdToken(token);
    (req as any).uid = decodedToken.uid;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
};
