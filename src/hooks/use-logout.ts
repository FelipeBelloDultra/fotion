import { signOut } from "next-auth/react";

export function useLogout() {
  function logout() {
    signOut({
      callbackUrl: "/home",
    });
  }

  return {
    logout,
  };
}
