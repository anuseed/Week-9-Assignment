import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function SignUpPage() {
  const { userId } = await auth();
  console.log(userId, "this is the userID lookkkkk");
  const user = await currentUser();

  async function handleBiography(formData) {
    "use server";
    console.log(formData);
    const userName = formData.get("user_name");
    const location = formData.get("location");
    const two_cents = formData.get("two_cents");

    await db.query(
      `INSERT INTO users (clerk_id, user_name, location, two_cents) VALUES ($1, $2, $3,$4)`,
      [userId, userName, location, two_cents]
    );

    revalidatePath(`/user-profile`);
  }

  return (
    <>
      <h2>
        Welcome {user?.firstName}
        {""}
        {user?.lastName}
      </h2>
      <h1>Please complete your biography</h1>
      <form action={handleBiography}>
        <label html="user_name">What should your user name be?</label>
        <input id="user_name" name="user_name" />
        <label html="location">your location</label>
        <input id="location" name="location" />
        <label html="two_cents">Your two cents thought</label>
        <input id="two_cents" name="two_cents" max={50} />
        <button
          type="submit"
          className=" rd-2 border-4 bg-blue-400 rounded-md p-4 m-4"
        >
          Save
        </button>
      </form>
    </>
  );
}
