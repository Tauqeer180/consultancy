import connectMongo from "@/lib/mongodb";
import ContactUs from "@/models/ContactUs";
import Testimonials from "@/models/Testimonials";

export async function GET(request) {
  try {
    await connectMongo();
    const data = await ContactUs.find();
    // console.log("Testimoinials from api ", data);
    return new Response(
      JSON.stringify({ data: data, success: true, status: 200 }),
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
