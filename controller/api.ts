import { Request, Response } from "express";
import { getUserById, updateUserData } from "../repository/userCollection";
import { User } from "../entities/user";

export const fetchUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const uid = (req as any).uid;
    const user = await getUserById(uid);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user data", error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).uid;
    const userData: Partial<User> = req.body;
    await updateUserData(uid, userData);
    res.json({ message: "User data updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating user data", error });
  }
};
