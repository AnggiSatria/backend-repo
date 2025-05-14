import admin from "firebase-admin";

const serviceAccount = require("./serviceAccountKey.json"); // save this file in local config

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
export const auth = admin.auth();
