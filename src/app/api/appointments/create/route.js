import cloudinary from "@/lib/cloudinary";
import connectMongo, { getGridFSBucket } from "@/lib/mongodb";
import {
  authenticate,
  optionalAuthentication,
} from "@/middleware/authMiddleware";
import Appointment from "@/models/Appointment";
import multer from "multer";
import { NextResponse } from "next/server";
import { Readable } from "stream";
import { UploadStream } from "cloudinary";
import { pipeline } from "stream/promises";
const upload = multer({ storage: multer.memoryStorage() });
export async function POST(request) {
  const bucket = await getGridFSBucket();

  try {
    let user = await optionalAuthentication(request);
    let formData = await request?.formData();
    console.log(formData);

    //   fName,
    //   lName,
    //   phone,
    //   email,
    //   dob,
    //   address,
    //   service,
    //   high_qualification,
    //   de_lang_level,
    //   en_lang_level,
    //   visa_country,
    //   visa_service_type,
    //   edu_background,
    //   edu_interest,
    //   edu_interest_other,
    //   cur_acad_level,
    //   other_acad_level,
    //   quest_or_conc, //Question or Concern
    //   additional_info,
    //   field_of_study,
    //   career_interest,
    //   preferred_countries,
    //   relev_exper,
    //   age,
    //   med_history,
    //   med_area_concern,
    //   med_symp_issues,
    //   prev_treat_med,
    //   curr_treat_med,
    //   allergies,
    //   lifestyle_habbits,
    //   // Medical consulting Ends

    //   // IT Consulting Starts

    //   it_service_type,
    //   other_it_service_type,
    //   proj_desc,
    //   proj_status,
    //   expect_start_date,
    //   add_comm_q,
    //   motivations,
    //   goals,

    //   // IT Consulting Ends

    //   // Files
    //   file_cnic,
    //   file_passport,
    //   file_degrees,
    //   file_exp_letter,
    //   file_lang_cert,
    //   file_addit_docs,
    //   // ...rest
    // } = await request.formData();

    // let rawFiles = [
    //   file_cnic,
    //   file_passport,
    //   file_degrees,
    //   file_exp_letter,
    //   file_lang_cert,
    //   file_addit_docs,
    // ];
    // console.log("raw files ", rest);
    const documents = {};
    const fields = {};

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        try {
          documents[key] = result.secure_url;
        } catch (error) {
          return new Response(
            JSON.stringify({
              message: error.message,
              status: 500,
              success: false,
            }),
            {
              status: 500,
            }
          );
        }
      } else {
        fields[key] = value;
      }
    }
    await connectMongo();

    let newAppoinment = new Appointment({
      ...fields,

      // IT Consulting Ends
      documents,
    });
    await newAppoinment?.save();
    return new Response(
      JSON.stringify({
        message: "created Successfully",
        status: 200,
        success: true,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: error.message,
        status: 500,
        success: false,
      }),
      {
        status: 500,
      }
    );
  }
}
