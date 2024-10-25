// if you want to set up a profile that renders data from clerk, you need:
// auth()
// currentUser --> username, email address
import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function UserProfilePage() {
  const { userId } = await auth();
  console.log(userId, "this is the userID profile");
  const user = await currentUser();
  // console.log(user, "this is the user! hey");

  async function handleSaveSticky(formData) {
    "use server";
    console.log("saving sticky");

    const sticky = formData.get("sticky");

    await db.query(
      `INSERT INTO stickies (sticky, user_clerk_id) VALUES ($1, $2)`,
      [sticky, userId]
    );
  }

  const stickies = await db.query(
    `SELECT *
  FROM stickies`
  );
  console.log(stickies, "these are my stickies");
  const wrangledStickies = stickies.rows;

  // revalidatePath("/user-profile");
  // redirect("/user-profile");
  return (
    <>
      <h2>User Profile Page </h2>
      {/* use optional chaining as you won't always know what the user has inputted */}
      <h2>
        Welcome {user?.firstName}
        {""}
        {user?.lastName}
      </h2>
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
      {wrangledStickies.map((sticky) => (
        <div key={sticky.id}>
          <p>{sticky.sticky}</p>
        </div>
      ))}
    </>
  );
}
