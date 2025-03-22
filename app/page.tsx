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
        In my career I&apos;ve worked for several companies, ranging from small startups to large enterprises.
        I enjoy every step of software development, from talking to stakeholders to deploying the final product.
      </p>
      <p className="pt-6">
        One step that is often overlooked is the deployment and maintenance of the software. This is where I&apos;m currently focusing on.
        I&apos;m passionate about automating everything, from the build process to the deployment and monitoring of the software.
      </p>
      <p className="pt-6">
        Outside of work, I spend my time researching new tech, playing video games, listening to music, driving my Seat Leon, lifting weights, and cooking a good meal afterwards.
      </p>
    </div>
  );
}
