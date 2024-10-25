import Image from "next/image";
import note from "@/../public/note.png";
import SignInUp from "@/components/SignInUp";
import userStyles from "../app/user-profile/user-profile.module.css";
import { db } from "@/utils/dbConnection";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default async function StickyHomePage() {
  const stickies = await db.query(
    `SELECT s.*, u.user_name
  FROM stickies s 
  JOIN users u ON u.clerk_id = s.user_clerk_id`
  );
  console.log(stickies, "these are my stickies");
  const wrangledStickies = stickies.rows;
  console.log(wrangledStickies, "this wrangled");
  return (
    <>
      <SignedOut>
        <div className="flex flex-row justify-center items-center p-5">
          <Image
            src={note}
            alt="cartoon girl with stickies stuck to her"
            className=" m-5 "
            width={100}
            height={100}
          />
          <h1 className="p-5 text-3xl">Sticky</h1>
          <br />
          <h3 className="p-5">for your thoughts...</h3>
        </div>
      </SignedOut>
      <SignInUp />
      <SignedIn>
        <div>
          <div className="flex flex-row justify-center items-center p-5">
            <Image
              src={note}
              alt="cartoon girl with stickies stuck to her"
              className=" m-5 "
              width={100}
              height={100}
            />
            <h1 className="p-5 text-3xl">Sticky thoughts...</h1>
            <br />
          </div>
          <div className={userStyles.container}>
            {wrangledStickies.map((sticky) => (
              <div
                class="card bg-primary text-primary-content w-64 h-64 shadow-xl"
                key={sticky.id}
              >
                <div class="card-body">
                  <h2 class="card-title">
                    <Link
                      class="link link-hover text-blue-600"
                      href={`/user-profile/${sticky.user_clerk_id}`}
                    >
                      {sticky.user_name}
                    </Link>
                  </h2>
                  <p>{sticky.sticky}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SignedIn>
    </>
  );
}
