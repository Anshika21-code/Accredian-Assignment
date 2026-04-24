import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const data = await Enquiry.create(body);

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}