import connectMongo from "@/lib/mongodb";
import Testimonials from "@/models/Testimonials";

export async function GET(request) {
  try {
    await connectMongo();
    const testimonials = await Testimonials.find();
    // console.log("Testimoinials from api ", testimonials);
    return new Response(
      JSON.stringify({ data: testimonials, success: true, status: 200 }),
      { status: 200 }
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
