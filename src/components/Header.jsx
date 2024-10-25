import { UserButton, SignedIn } from "@clerk/nextjs";

import { auth } from "@clerk/nextjs/server";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export default async function Header() {
  const { userId } = await auth();
  console.log(userId, "this is the user ID hahahaha");

  return (
    <>
      {/* <DropdownMenu.root>
        <DropdownMenu.Trigger>
          <button>
            Menu
            <DropdownMenu.TriggerIcon />
          </button>
        </DropdownMenu.Trigger> */}

      <SignedIn>
        <UserButton className="m-20" />
      </SignedIn>

      <Link href="/" className="p-5">
        Home
      </Link>
      <Link href="/user-profile" className="p-5">
        Profile
      </Link>
    </>
  );
}
