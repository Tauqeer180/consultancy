import connectMongo from "@/lib/mongodb";
import Appointment from "@/models/Appointment";

export async function GET(request) {
  try {
    await connectMongo();
    const data = await Appointment.find();
    // console.log("Testimoinials from api ", data);
    let filteredData = data?.map(
      ({ _id, fName, lName, phone, email, service }) => ({
        _id,
        fName,
        lName,
        phone,
        email,
        service,
      })
    );
    return new Response(
      JSON.stringify({ data: filteredData, success: true, status: 200 }),
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
