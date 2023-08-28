import { Metadata } from "next"

export const metadata: Metadata = {
  title: "home"
};

export default function Home() {
  return (
    <>
      <div className="max-w-screen-md leading-loose">
        <h3 className="font-semibold text-lg pt-6">
          A little bit about myself
        </h3>
        <p className="pt-6">
          I&apos;m a software engineer living in Baarn, The Netherlands. I
          graduated with a BSc in software engineering and a degree in visual
          design.
        </p>
        <p className="pt-6">
          In my free time I like to spend my time playing video games, listening
          to music, driving my Seat Leon, do weightlifting and cook myself a
          tasty meal afterwards.
        </p>
      </div>
    </>
  );
}
