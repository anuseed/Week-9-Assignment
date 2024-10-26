// this is another user's profile
import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import userStyles from "@/app/user-profile/user-profile.module.css";

export default async function UserProfilePage({ params }) {
  const idParams = await params;
  console.log(idParams);
  const userId = idParams["user-id"];

  console.log(userId, "this is the userID profile");

  const stickies = await db.query(
    `SELECT *
  FROM stickies WHERE user_clerk_id=$1`,
    [userId]
  );
  console.log(stickies, "these are my stickies");
  const wrangledStickies = stickies.rows;
  console.log(wrangledStickies, "this wrangled");

  const biography = await db.query(`SELECT * FROM users WHERE clerk_id=$1`, [
    userId,
  ]);
  console.log(biography, "this is my biography");
  const wrangledBiography = biography.rows;
  console.log(wrangledBiography);

  return (
    <>
      {wrangledBiography.map((biography) => (
        <div
          key={biography.id}
          className="flex flex-col items-center space-y-5 m-5 p-2"
        >
          <p>{biography.user_name}&apos;s Profile</p>
          <p>Their Location: {biography.location}</p>
          <p>Their two cents: {biography.two_cents}</p>
        </div>
      ))}

      <div className={userStyles.container}>
        {wrangledStickies.map((sticky) => (
          <div
            key={sticky.id}
            className="card bg-primary text-primary-content w-64 h-64 shadow-xl"
          >
            <p className="card-body">{sticky.sticky}</p>
          </div>
        ))}
      </div>
    </>
  );
}
