import { SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";

export default function SignInUp() {
  return (
    <div className="flex flex-row justify-center space-x-5 ">
      <SignedOut>
        <SignInButton className="btn btn-accent m-10" mode="modal">
          Sign In
        </SignInButton>
        <SignUpButton className="btn btn-accent m-10" mode="modal">
          Sign Up
        </SignUpButton>
      </SignedOut>
    </div>
  );
}
