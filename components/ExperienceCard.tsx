"use client";

import { Experience } from "@/app/types";
import Image from "next/image";

export default function ExperienceCard({ experience: client }: { readonly experience: Experience }) {
  return (
    <div className="px-3 border bg-white bg-opacity-5 text-white text-opacity-80 hover:text-opacity-100 border-white border-opacity-10">
      <div className="py-6 flex flex-row min-h-40 gap-4">
        <div className="flex flex-col justify-center items-center basis-1/6">
          {client.companyLogo && (
            <Image
              src={client.companyLogo}
              alt={client.companyLogo + "'s logo"}
              height={72}
              width={72}
            />
          )}
        </div>
        <div>
          <h5 className="text-2xl font-semibold">
            {client.companyName}
            {client.current && (
              <span className="text-xs italic mx-2 text-gray-100">current</span>
            )}
            {!client.current && (
              <span className="text-xs italic mx-2 text-gray-400">
                {client.start_date} - {client.end_date}
              </span>
            )}
          </h5>
          <p className="font-thin text-md">{client.role}</p>
          <div className="flex flex-row flex-wrap gap-2 mt-4 lowercase">
            {client.tech_tags.map((t) => (
              <span
                className="bg-gray-700 border border-gray-600 hover:bg-gray-800 cursor-pointer rounded-md text-xs px-2"
                key={t}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="py-3 border-t border-white border-opacity-10">
        <p className="text-sm leading-loose">{client.description}</p>
      </div>
    </div>
  );
}
