import admin from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

// const serviceAccount = JSON.parse(
//   process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
// );

if (!admin.apps.length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  });
}

const storage = getStorage().bucket();

export { storage };
