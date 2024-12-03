"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";

export function SignIn() {
  return (
    <div>
      <Button onClick={() => signIn("github")}>Sign In</Button>

      <Button variant="secondary" onClick={() => signOut}>
        Sign Out
      </Button>
    </div>
  );
}
