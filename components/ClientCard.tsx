"use client";

import { Client } from "@/app/types";
import Image from "next/image";

export default function ClientCard({ client }: { client: Client }) {
  return (
    <div className="px-3 border bg-white bg-opacity-5 text-white text-opacity-80 hover:text-opacity-100 border-white border-opacity-10">
      <div className="py-6 flex flex-row h-max gap-4">
        <div>
          {client.companyLogo && (
            <Image
              src={client.companyLogo}
              alt={client.companyLogo + "'s logo"}
              height={64}
              width={64}
            />
          )}
        </div>
        <div>
          <h5 className="text-2xl font-semibold">{client.companyName}
          {client.current && (
            <span className="text-xs italic mx-2 text-gray-100">current</span>
          )}
          {!client.current && (
            <span className="text-xs italic mx-2 text-gray-400">{client.start_date} - {client.end_date}</span>
          )}
          </h5>
          <p className="font-thin text-md">{client.role}</p>
          <div className="flex flex-row flex-wrap gap-2 py-2">
            {client.tech_tags.map((t) => (<span className="bg-blue-700 hover:bg-blue-600 cursor-pointer rounded-md text-sm px-2" key={t}>{t}</span>))}
          </div>
        </div>
      </div>
      <div className="py-3 border-t border-white border-opacity-10">
        <p className="text-sm leading-loose">{client.description}</p>
      </div>
    </div>
  );
}
