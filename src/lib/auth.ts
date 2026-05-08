import { betterAuth } from "better-auth";
import { dash } from "@better-auth/infra";
import Database from "better-sqlite3";

// Local-dev DB. For production, swap this for Postgres / Turso / Neon and
// move the file path to an env var.
const db = new Database("./better-auth.db");

export const auth = betterAuth({
  database: db,
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    dash({
      apiUrl: process.env.BETTER_AUTH_API_URL,
      kvUrl: process.env.BETTER_AUTH_KV_URL,
      apiKey: process.env.BETTER_AUTH_API_KEY,
    }),
  ],
});
