import { storage } from "@/lib/firebaseAdmin";

const admin = require("firebase-admin");
const path = require("path");
import { promisify } from "util";
import fs from "fs";
import os from "os";
export function useFileUpload(options = {}) {
  const writeFile = promisify(fs.writeFile);
  const unlinkFile = promisify(fs.unlink);
  const uploadFile = async (file, bytes, buffer, dataURI) => {
    console.log("Upload file ", file);
    //  bucket = storage
    // const [metadata] = await file.getMetadata();
    // const filePath = file.filepath || file.path;
    const fileName = file.originalFilename || file.name;
    console.log("file name ", fileName);
    const tempDir = os.tmpdir();
    const filePath = path.join(tempDir, fileName);

    console.log("file path ", filePath);
    console.log("Data , uri ", dataURI?.substring(0, 100));
    const base64Data = dataURI.replace(/^data:.*;base64,/, "");
    const buffer2 = Buffer.from(base64Data, "base64");
    await writeFile(filePath, buffer2);
    let destination = `consulting/${fileName}-${Date.now()}`;
    const uploadMetadata = {
      contentType: `auto`,
      cacheControl: "public, max-age=31536000",
    };

    await storage.upload(filePath, {
      destination,
      metadata: uploadMetadata,
    });
    console.log(`Uploaded ${file} to ${destination}`);
  };

  return { uploadFile };
}
