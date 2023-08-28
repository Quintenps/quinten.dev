"use client";

import { Client } from "@/app/types";
import Image from "next/image";

export default function ClientCard({ client }: { client: Client }) {
  return (
    <div className="px-3 border bg-white bg-opacity-5 text-white text-opacity-80 hover:text-opacity-100 border-white border-opacity-10">
      <div className="py-6 flex flex-row h-32 gap-4">
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
          {client.current && (
            <span className="text-xs italic text-gray-400">current</span>
          )}
          <h5 className="text-2xl font-semibold">{client.companyName}</h5>
          <p className="font-thin text-md">{client.role}</p>
        </div>
      </div>
      <div className="py-6 border-t border-white border-opacity-10">
        <p className="text-sm leading-loose">{client.description}</p>
      </div>
    </div>
  );
}
