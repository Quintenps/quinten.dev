"use client";

import { Tool } from "@/app/types";
import Image from "next/image";

export default function ToolCard({ tool }: { readonly tool: Tool }) {
  return (
    <div className="flex flex-row p-4 cursor-pointer text-pretty text-ellipsis border bg-white bg-opacity-5 text-white text-opacity-80 hover:text-opacity-100 border-white border-opacity-10">
      {tool.image && (
        <Image src={tool.image} className="self-center mr-5" width={40} height={40} alt={tool.name} />
      )}
      <div>
        <h5 className="font-semibold">{tool.name}</h5>
        <p>{tool.usage}</p>
      </div>
    </div>
  );
}