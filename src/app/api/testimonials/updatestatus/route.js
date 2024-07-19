import connectMongo from "@/lib/mongodb";
import { authenticate } from "@/middleware/authMiddleware";
import Testimonials from "@/models/Testimonials";

export async function PATCH(request) {
  try {
    const user = await authenticate(request);
    const { id, status } = await request.json();
    await connectMongo();
    const testimonial = await Testimonials.findOneAndUpdate(
      {
        _id: id,
      },
      {
        status,
      },
      {
        new: true,
      }
    );
    // await testimonial.save();
    if (!testimonial) {
      return new Response(
        JSON.stringify({
          message: "Record not Found",
          success: false,
          statusL404,
        }),
        {
          status: 404,
        }
      );
    }
    return new Response(
      JSON.stringify({
        message: "Updated Successfully",
        success: true,
        data: testimonial,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: error?.message || "Something went wrong!",
        success: false,
      }),
      {
        status: 500,
      }
    );
  }
}
