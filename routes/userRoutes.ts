import { Router } from "express";
import { fetchUserData, updateUser } from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.get("/fetch-user-data", authMiddleware, fetchUserData);
router.post("/update-user-data", authMiddleware, updateUser);

export default router;
