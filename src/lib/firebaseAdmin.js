import admin from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

const privateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n");
let app;
if (!admin.apps.length) {
  app = initializeApp({
    credential: cert({
      type: process.env.FIREBASE_ACC_TYPE,
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: process.env.FIREBASE_AUTH_URI,
      token_uri: process.env.FIREBASE_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_CERT_URL,
      client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
      universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
    }),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  });
}
console.log(process.env.NODE_ENV);
const storage = getStorage(app).bucket();

export { storage };
