import { SignIn } from "@/components/sign-in";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>

      <ThemeToggle />

      <SignIn />
    </div>
  );
}
