import admin from "firebase-admin";

const serviceAccount = require("./serviceAccountKey.json"); // simpan file ini secara lokal

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
export const auth = admin.auth();
