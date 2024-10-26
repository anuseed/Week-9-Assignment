// this is the logged in users page
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

  // this delete will only work for the logged in user as the user_clerk_id needs to be the same as the logged in users
  async function handleDelete(formValues) {
    "use server";
    const stickyId = formValues.get("id");
    const deleteSticky = await db.query(
      `DELETE FROM stickies WHERE id = $1 AND user_clerk_id = $2`,
      [stickyId, userId]
    );
    revalidatePath(`/user-profile`);
    redirect(`/user-profile`);
  }

  return (
    <>
      {wrangledBiography.map((biography) => (
        <div
          key={biography.id}
          className="flex flex-col items-center space-y-5 m-5 p-2"
        >
          <p>Welcome {biography.user_name}</p>
          <p>Location: {biography.location}</p>
          <p>Your two cents: {biography.two_cents}</p>
        </div>
      ))}
      <div>
        <form
          action={handleSaveSticky}
          className="flex flex-col justify-items-center space-y-5 m-5 p-5 "
        >
          <label html="sticky"></label>
          <textarea
            id="sticky"
            name="sticky"
            className="textarea textarea-bordered textarea-md w-full max-w-xs"
            placeholder="Sticky for your thoughts..."
            required
          />
          <button type="submit" className="btn btn-accent btn-outline w-24">
            Save
          </button>
        </form>
      </div>

      <div className={userStyles.container}>
        {wrangledStickies.map((sticky) => (
          <form action={handleDelete} key={sticky.id}>
            <input type="hidden" name="id" value={sticky.id} />
            <div className="card bg-primary text-primary-content w-64 h-64 shadow-xl">
              <p className="card-body">{sticky.sticky}</p>

              <button
                type="submit"
                className="btn btn-active btn-ghost w-24 m-5"
              >
                Delete
              </button>
            </div>
          </form>
        ))}
      </div>
    </>
  );
}
