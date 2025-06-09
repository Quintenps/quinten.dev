import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/config/experiences";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "experiences",
};

export default function Experiences() {
  return (
    <>
      <h3 className="font-semibold text-lg pb-2">Current & Past Experiences</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {experiences.map((client) => (
          <ExperienceCard experience={client} key={client.companyName} />
        ))}
      </div>
    </>
  );
}
