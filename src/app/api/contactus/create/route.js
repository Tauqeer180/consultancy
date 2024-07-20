import connectMongo from "@/lib/mongodb";
import { optionalAuthentication } from "@/middleware/authMiddleware";
import ContactUs from "@/models/ContactUs";

export async function POST(request) {
  try {
    const user = await optionalAuthentication(request);
    const { fName, lName, subject, message, email } = await request.json();
    await connectMongo();
    const newContactUs = new ContactUs({
      userId: user?._id || null,
      fName,
      lName,
      subject,
      message,
      email,
      status: false,
    });
    await newContactUs.save();
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
