import cloudinary from "@/lib/cloudinary";
import connectMongo, { getGridFSBucket } from "@/lib/mongodb";
import { authenticate } from "@/middleware/authMiddleware";
import Appointment from "@/models/Appointment";
import multer from "multer";
import { NextResponse } from "next/server";
import { Readable } from "stream";
import { UploadStream } from "cloudinary";
import { pipeline } from "stream/promises";
const upload = multer({ storage: multer.memoryStorage() });

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = upload.any();
export async function POST(req, res) {
  return new Promise((resolve, reject) => {
    handler(req, res, async (err) => {
      if (err) {
        return reject(
          NextResponse.json({ error: err.message }, { status: 500 })
        );
      }

      const bucket = await getGridFSBucket();
      const uploadedFiles = [];
      // const formData = req.body; // Access other form data here
      // console.log("Form Data ", formData);
      try {
        const files = req.files;
        for (const file of files) {
          const readableStream = new Readable();
          readableStream._read = () => {};
          readableStream.push(file.buffer);
          readableStream.push(null);

          const uploadStream = bucket.openUploadStream(file.originalname, {
            contentType: file.mimetype,
          });

          await new Promise((resolve, reject) => {
            readableStream
              .pipe(uploadStream)
              .on("error", reject)
              .on("finish", () => {
                console.log("upload stream ", uploadStream);
                uploadedFiles.push({
                  field: file.fieldname,
                  fileId: uploadStream.id,
                });
                resolve();
              });
          });
        }

        console.log("Uploaded Files ", uploadedFiles);

        // Combine formData and uploadedFiles in the response
        resolve(
          NextResponse.json(
            {
              message: "Files uploaded successfully",
              files: uploadedFiles,
              // formData,
            },
            { status: 201 }
          )
        );
      } catch (error) {
        reject(
          NextResponse.json(
            { error: "Failed to upload files" },
            { status: 500 }
          )
        );
      }
    });
  });
}
