import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "contact",
};

export default function Contact() {
  return (
    <div className="text-white text-opacity-80">
      <h3 className="font-semibold text-lg pb-2">Get in touch?</h3>
      <p>
        You can find me at{" "}
        <Link href="//x.com/quintenps" className="font-semibold">
          X
        </Link>{" "}
        or perhaps see some of my code at{" "}
        <Link href="//github.com/quintenps" className="font-semibold">
          Github
        </Link>
      </p>
    </div>
  );
}
