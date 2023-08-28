import ToolCard from "@/components/ToolsCard";
import { certifications, computers, tools } from "@/config/tools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "tools",
};

export default function Tools() {
  return (
    <>
      <h3 className="font-semibold text-lg py-6">Stuff I work with</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, index) => (
          <ToolCard tool={tool} key={index} />
        ))}
      </div>
      <h3 className="font-semibold text-lg py-6">Certifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((tool, index) => (
          <ToolCard tool={tool} key={index} />
        ))}
      </div>
      <h3 className="font-semibold text-lg py-6">My computers</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {computers.map((tool, index) => (
          <ToolCard tool={tool} key={index} />
        ))}
      </div>
    </>
  );
}
