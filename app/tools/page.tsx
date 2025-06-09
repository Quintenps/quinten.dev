import ComputerCard from "@/components/ComputerCard";
import ToolCard from "@/components/ToolsCard";
import { certifications, computers, tools } from "@/config/tools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "tools",
};

export default function Tools() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="font-semibold text-lg pb-2">Stuff I work with</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, index) => (
            <ToolCard tool={tool} key={tool.name} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-lg pb-2">Computers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {computers.map((computer, index) => (
            <ComputerCard computer={computer} key={computer.name} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-lg pb-2">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((tool, index) => (
            <ToolCard tool={tool} key={tool.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
