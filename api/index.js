import express from "express";
import { z } from "zod";
// Uncomment the line below if you need database access
// import { db } from "./db.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Validation schemas
const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255),
  subject: z.string().min(1).max(200),
  message: z.string().min(10).max(2000)
});

const newsletterFormSchema = z.object({
  email: z.string().email()
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    // Validate request body
    const validatedData = contactFormSchema.parse(req.body);

    // In a real app, this would save to the database and send an email
    // For this demo, we'll just return a success response
    res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
      data: { name: validatedData.name, email: validatedData.email }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data", 
        errors: error.errors 
      });
    } else {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        success: false, 
        message: "Server error processing your request" 
      });
    }
  }
});

// Newsletter subscription endpoint
app.post("/api/newsletter", async (req, res) => {
  try {
    // Validate request body
    const validatedData = newsletterFormSchema.parse(req.body);

    // In a real app, this would save to a newsletter subscription database
    // For this demo, we'll just return a success response
    res.status(200).json({
      success: true,
      message: "Newsletter subscription successful",
      email: validatedData.email
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        success: false, 
        message: "Invalid email address", 
        errors: error.errors 
      });
    } else {
      console.error("Error processing newsletter subscription:", error);
      res.status(500).json({ 
        success: false, 
        message: "Server error processing your request" 
      });
    }
  }
});

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

// Default handler for Vercel
export default app;
