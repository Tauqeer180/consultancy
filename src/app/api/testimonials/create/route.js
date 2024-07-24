import connectMongo from "@/lib/mongodb";
import {
  authenticate,
  optionalAuthentication,
} from "@/middleware/authMiddleware";
import Testimonials from "@/models/Testimonials";

export async function POST(request) {
  try {
    const user = await optionalAuthentication(request);
    const { fName, lName, service_taken, message } = await request.json();
    await connectMongo();
    const newTestimonial = new Testimonials({
      userId: user?._id || null,
      fName,
      lName,
      serviceTaken: service_taken,
      message,
      status: true,
    });
    await newTestimonial.save();

    return new Response(
      JSON.stringify({ message: "Created Successfully", success: true }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: error.message, success: false }),
      {
        status: 500,
      }
    );
  }
}
