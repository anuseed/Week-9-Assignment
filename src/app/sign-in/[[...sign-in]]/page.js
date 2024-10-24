import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <h1>Sign-in to see all your stickies</h1>
      <SignIn />
    </>
  );
}
