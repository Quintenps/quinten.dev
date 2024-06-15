import ClientCard from "@/components/ClientCard";
import { clients } from "@/config/clients";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "clients",
};

export default function Clients() {
  return (
    <>
      <h3 className="font-semibold text-lg pb-2">Past & Current Clients</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {clients.map((client) => (
          <ClientCard client={client} key={client.companyName} />
        ))}
      </div>
    </>
  );
}
