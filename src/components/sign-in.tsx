"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";

export function SignIn() {
  return (
    <div>
      <Button
        onClick={() =>
          signIn("github", {
            callbackUrl: "/",
          })
        }
      >
        Sign In
      </Button>

      <Button
        variant="secondary"
        onClick={() =>
          signOut({
            callbackUrl: "/home",
          })
        }
      >
        Sign Out
      </Button>
    </div>
  );
}
