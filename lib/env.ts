/**
 * Environment variables configuration
 * Validates and exports environment variables with type safety
 */

export const env = {
  // Site Configuration
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || "Portfolio",

  // Email Service
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_EMAIL: process.env.CONTACT_EMAIL,

  // Analytics
  GA_ID: process.env.NEXT_PUBLIC_GA_ID,

  // Database
  DATABASE_URL: process.env.DATABASE_URL,
} as const;

/**
 * Validates required environment variables
 * Call this in your app initialization if certain vars are required
 */
export function validateEnv() {
  const required: (keyof typeof env)[] = [];

  for (const key of required) {
    if (!env[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  }
}
