"use client";

import { Tool } from "@/app/types";
import Image from "next/image";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="flex flex-row p-2 cursor-pointer items-center gap-4 border bg-white bg-opacity-5 text-white text-opacity-80 hover:text-opacity-100 border-white border-opacity-10">
      {tool.image && (
        <Image src={tool.image} height={48} width={48} alt={tool.name} />
      )}
      <div>
        <h5 className="font-semibold">{tool.name}</h5>
        <p>{tool.usage}</p>
      </div>
    </div>
  );
}
