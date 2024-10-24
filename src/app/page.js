import Image from "next/image";
import note from "@/../public/note.png";

export default function StickyHomePage() {
  return (
    <>
      <Image
        src={note}
        alt="cartoon girl with stickies stuck to her"
        className="rounded-lg border-2"
        width={400}
        height={500}
      />
      <h1>Sticky</h1>
      <h3>for your thoughts...</h3>
    </>
  );
}
