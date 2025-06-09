import { Metadata } from "next"

export const metadata: Metadata = {
  title: "quinten.dev | home"
};

export default function Home() {
  return (
    <div className="max-w-screen-md leading-loose">
      <h3 className="font-semibold text-lg pt-6">Hi!</h3>
      <p className="pt-6">
        I&apos;m a DevOps Engineer based in Baarn, The Netherlands, with a background in software engineering.
      </p>
      <p className="pt-6">
        I've worked with both small startups and large companies, building software from start to finish.
        I enjoy turning ideas into working products and making sure everything runs smoothly along the way.
      </p>
      <p className="pt-6">
        These days, I focus more on what happens after the code is written, like deploying updates, keeping systems running, and making sure everything is automated.
        I like finding ways to save time and reduce mistakes by setting up smart tools and clear processes.
      </p>
      <p className="pt-6">
        Outside of work, I spend my time researching new tech, playing video games, listening to music, driving my Seat Leon, lifting weights, and cooking a good meal afterwards.
      </p>
    </div>
  );
}
