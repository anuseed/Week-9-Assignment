// if you want to set up a profile that renders data from clerk, you need:
// auth()
// currentUser --> username, email address
import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import userStyles from "@/app/user-profile/user-profile.module.css";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export default async function UserProfilePage() {
  const { userId } = await auth();

  console.log(userId, "this is the userID profile");

  async function handleSaveSticky(formData) {
    "use server";
    console.log("saving sticky");

    const sticky = formData.get("sticky");

    await db.query(
      `INSERT INTO stickies (sticky, user_clerk_id) VALUES ($1, $2)`,
      [sticky, userId]
    );
    revalidatePath(`/user-profile`);
  }

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
        <div key={biography.id}>
          <p>Welcome {biography.user_name}</p>
          <p>Location: {biography.location}</p>
          <p>Your two cents: {biography.two_cents}</p>
        </div>
      ))}
      <form action={handleSaveSticky}>
        <label html="sticky">Sticky for your thoughts ...</label>
        <textarea id="sticky" name="sticky" />
        <button
          type="submit"
          className=" rd-2 border-4 bg-blue-400 rounded-md p-4 m-4"
        >
          Save
        </button>
      </form>
      <h2>Your Stickies</h2>
      <div className={userStyles.container}>
        {wrangledStickies.map((sticky) => (
          <div key={sticky.id} className={userStyles.sticky}>
            <p>{sticky.sticky}</p>
          </div>
        ))}
      </div>
    </>
  );
}
