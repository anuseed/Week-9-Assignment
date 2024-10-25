import { UserButton, SignedIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Header() {
  const { userId } = await auth();
  console.log(userId, "this is the user ID hahahaha");

  return (
    <>
      {/* this nav bar is a daisy ui component that I modified to suit my links */}
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                {" "}
                <Link href="/" class="link link-neutral">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/user-profile" class="link link-neutral">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/about" class="link link-neutral">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">Sticky</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <Link href="/" class="link link-neutral">
                Home
              </Link>
            </li>
            <li>
              <Link href="/user-profile" class="link link-neutral">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/about" class="link link-neutral">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </>
  );
}
