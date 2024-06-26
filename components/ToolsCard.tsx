"use client";

import { Tool } from "@/app/types";
import Image from "next/image";

export default function ToolCard({ tool }: { tool: Tool }) {
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


{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z"/></svg> */}