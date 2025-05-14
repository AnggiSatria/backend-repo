import { db } from "../config/firebaseConfig";
import { User } from "../entities/user";

const userRef = db.collection("USERS");

export const getUserById = async (uid: string): Promise<User | null> => {
  const doc = await userRef.doc(uid).get();
  return doc.exists ? (doc.data() as User) : null;
};

export const updateUserData = async (
  uid: string,
  data: Partial<User>
): Promise<void> => {
  await userRef.doc(uid).set(data, { merge: true });
};
