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
    <div>
      <h1 className="text-center p-5 m-5 text-2xl">
        Please complete your biography
      </h1>
      <form
        action={handleBiography}
        className="flex flex-col justify-items-center space-y-5 m-5 p-5 "
      >
        <label html="user_name">What should your user name be?</label>
        <input
          id="user_name"
          name="user_name"
          class="input input-bordered input-info w-full max-w-xs"
          placeholder="Type here"
          required
        />
        <label html="location">Where do you live?</label>
        <input
          id="location"
          name="location"
          class="input input-bordered input-info w-full max-w-xs"
          placeholder="Type here"
        />
        <label html="two_cents">Your two cents&apos; thought.</label>
        <textarea
          id="two_cents"
          name="two_cents"
          class="textarea textarea-info textarea-md w-full max-w-xs"
          placeholder="Type here, no more than a few words"
          required
          max={50}
        />
        <button type="submit" class="btn btn-accent btn-outline w-24">
          Save
        </button>
      </form>
    </div>
  );
}
