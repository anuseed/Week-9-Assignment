import { UserButton, SignedIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Header() {
  const { userId } = await auth();
  console.log(userId, "this is the user ID hahahaha");

  return (
    <>
      {/* this nav bar is a daisy ui component that I modified to suit my links */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                {" "}
                <Link href="/" className="link link-neutral">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/user-profile" className="link link-neutral">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/about" className="link link-neutral">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Sticky</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/" className="link link-neutral">
                Home
              </Link>
            </li>
            <li>
              <Link href="/user-profile" className="link link-neutral">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/about" className="link link-neutral">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </>
  );
}
