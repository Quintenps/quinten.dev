import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "contact",
};

export default function Contact() {
  return (
    <div className="text-white text-opacity-80">
      <h3 className="font-semibold text-lg py-6">Get in touch?</h3>
      <p>
        You can find me at{" "}
        <Link href="//twitter.com/quintenps" className="font-semibold">
          Twitter
        </Link>{" "}
        or perhaps see of my code at{" "}
        <Link href="//github.com/quintenps" className="font-semibold">
          Github
        </Link>
      </p>
    </div>
  );
}
