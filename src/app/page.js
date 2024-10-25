import Image from "next/image";
import note from "@/../public/note.png";
import SignInUp from "@/components/SignInUp";
import userStyles from "../app/user-profile/user-profile.module.css";
import { db } from "@/utils/dbConnection";
import { SignedIn } from "@clerk/nextjs";
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
      <div className="flex flex-row items-center">
        <Image
          src={note}
          alt="cartoon girl with stickies stuck to her"
          className=" m-5 rounded-lg border-2"
          width={100}
          height={100}
        />
        <h1 className="p-5 text-3xl">Sticky</h1>
        <br />
        <h3 className="p-5">for your thoughts...</h3>
      </div>
      <SignInUp />
      <SignedIn>
        <div>
          <h2>Everyone`s Stickies</h2>
          <div className={userStyles.container}>
            {wrangledStickies.map((sticky) => (
              <div key={sticky.id} className={userStyles.sticky}>
                <p>{sticky.sticky}</p>
                <Link href={`/user-profile/${sticky.user_clerk_id}`}>
                  {sticky.user_name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SignedIn>
    </>
  );
}
