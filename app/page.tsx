import { Metadata } from "next"

export const metadata: Metadata = {
  title: "quinten.dev | home"
};

export default function Home() {
  return (
    <div className="max-w-screen-md leading-loose">
      <h3 className="font-semibold text-lg pt-6">A little bit about myself</h3>
      <p className="pt-6">
        I&apos;m a DevOps Engineer based in Baarn, The Netherlands, with a background in software engineering.
      </p>
      <p className="pt-6">
        I like making things work, automating stuff, and making sure code goes from a repo to production as smoothly as possible.
        In the past I&apos;ve worked with things such as: Kubernetes, infrastructure as code, monitoring solutions, and deployment strategies that help teams move fast without breaking things.
      </p>
      <p className="pt-6">
        I spend most of my time figuring out how to make deployments faster, systems more reliable, and devs happier. Whether it&apos;s fine-tuning a pipeline, setting up monitoring, or messing with containers, I enjoy the whole process.
      </p>
      <p className="pt-6">
        Outside of work, I spend my time researching new tech, playing video games, listening to music, driving my Seat Leon, lifting weights, and cooking a good meal afterwards.
      </p>
    </div>
  );
}
