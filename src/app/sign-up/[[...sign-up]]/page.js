import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <>
      <h1>Sign-up to start posting stickies</h1>
      <SignUp />
    </>
  );
}
