"use client";

import { createAuthClient } from "better-auth/react";

// baseURL omitted — defaults to window.location.origin, which is correct in
// dev (localhost:3000) and prod (ottv.org). The catch-all handler at
// /api/auth/[...all] is mounted there.
export const authClient = createAuthClient();

export const { signIn, signUp, signOut, useSession } = authClient;
