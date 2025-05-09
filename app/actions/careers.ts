"use server";

import { Resend } from "resend";
import JobApplicationEmail from "../emails/JobApplicationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitJobApplication(formData: FormData) {
  try {
    const fullName = formData.get("fullName") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const address = formData.get("address") as string;
    const position = formData.get("position") as string;
    const location = formData.get("location") as string;
    
    // Resume file handling would require additional setup for file storage
    // For now, we'll just acknowledge that a resume was uploaded
    const resumeFile = formData.get("resume") as File;
    const resumeUploaded = resumeFile && resumeFile.size > 0;

    // Validate required fields
    if (!fullName || !phone || !email || !address || !position || !location) {
      return { success: false, error: "All fields are required" };
    }

    // Send email notification to admin
    await resend.emails.send({
      from: "ClearVue Careers <careers@clearvue.co.in>",
      to: "admin@clearvue.co.in", // Change to your admin email
      subject: `New Job Application: ${position}`,
      react: JobApplicationEmail({
        fullName,
        phone,
        email,
        address,
        position,
        location,
        resumeUploaded
      }),
    });

    // In a real application, you would also store this data in a database

    return { success: true };
  } catch (error) {
    console.error("Error submitting job application:", error);
    return { 
      success: false, 
      error: "Failed to submit application. Please try again later." 
    };
  }
} 