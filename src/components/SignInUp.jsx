import { SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";

export default function SignInUp() {
  return (
    <>
      <SignedOut>
        <SignInButton className="p-5" mode="modal">
          Sign In
        </SignInButton>
        <SignUpButton className="p-5" mode="modal">
          Sign Up
        </SignUpButton>
      </SignedOut>
    </>
  );
}
