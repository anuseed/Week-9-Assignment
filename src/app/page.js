import Image from "next/image";
import note from "@/../public/note.png";
import SignInUp from "@/components/SignInUp";

export default function StickyHomePage() {
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
    </>
  );
}
