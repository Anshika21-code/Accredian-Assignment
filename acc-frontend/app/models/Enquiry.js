import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  company: String,
  domain: String,
});

export default mongoose.models.Enquiry ||
mongoose.model("Enquiry", EnquirySchema);