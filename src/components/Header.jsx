//I am going to Clerk components here to manage my authentication tasks
//All of these components work in the server
import { UserButton, SignedIn } from "@clerk/nextjs";

//we are going to import auth() to have access to authentication credentails from the user
import { auth } from "@clerk/nextjs/server";
// import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export default function Header() {
  //we can destructure the userId from clerk auth
  //this userId can be saved to your database, so you can match user with posts (one to many)
  const { userId } = auth();
  console.log(userId, "this is the user ID");

  return (
    <>
      {/* <DropdownMenu.root>
        <DropdownMenu.Trigger>
          <button>
            Menu
            <DropdownMenu.TriggerIcon />
          </button>
        </DropdownMenu.Trigger> */}
      {/* when the user is signed in, i will show the user button */}
      <SignedIn>
        <UserButton className="m-20" />
      </SignedIn>
      {/* we only want to show the SignInButton and SignUpButton when the user is
          signed out */}
      <Link href="/" className="p-5">
        Home
      </Link>
      <Link href={`/user-profile/${userId}`} className="p-5">
        Profile
      </Link>
      {/* </DropdownMenu.root> */}
    </>
  );
}
