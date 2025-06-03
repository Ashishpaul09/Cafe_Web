import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

const connectionString = process.env.DATABASE_URL;

// Configure for serverless environment
const client = postgres(connectionString, {
  prepare: false,
  max: 1, // Limit connections for serverless
});

export const db = drizzle(client);
