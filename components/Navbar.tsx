"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const segment = useSelectedLayoutSegment();
  const [display, setDisplay] = useState(false);

  const toggle = () => {
    setDisplay(!display);
  };

  const menuItems = [
    { title: "about me", href: "/", segment: null },
    { title: "clients", href: "/clients", segment: "clients" },
    { title: "tools", href: "/tools", segment: "tools" },
    { title: "contact", href: "/contact", segment: "contact" },
  ];

  return (
    <aside className="md:w-64 md:min-h-screen bg-white bg-opacity-5 px-10 md:border-r border-white border-opacity-20">
      <div className="flex place-content-between">
        <div className="my-6 font-semibold">
          <h2>Quinten Peels</h2>
        </div>
        <div
          className="md:hidden flex items-center opacity-90 hover:opacity-100 cursor-pointer"
          onClick={toggle}
        >
          <nav>
            <button
              className="text-white w-10 h-10 relative focus:outline-none"
              onClick={toggle}
            >
              <span className="sr-only">Open main menu</span>
              <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={
                    "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out " +
                    (display ? "rotate-45" : "-translate-y-1.5")
                  }
                ></span>
                <span
                  aria-hidden="true"
                  className={
                    "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out " +
                    (display ? "opacity-0" : "")
                  }
                ></span>
                <span
                  aria-hidden="true"
                  className={
                    "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out " +
                    (display ? "-rotate-45" : "translate-y-1.5")
                  }
                ></span>
              </div>
            </button>
          </nav>
        </div>
      </div>
      <div className="hidden md:flex my-6 flex-col gap-y-4">
        {menuItems.map((item) => (
          <Link
            className={
              item.segment === segment
                ? "font-semibold opacity-100"
                : "hover:opacity-100 opacity-80"
            }
            key={item.href}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div
        className={
          "backdrop-blur-sm z-10 w-full min-h-screen top-20 bg-black bg-opacity-70 " +
          (display ? "fixed" : "hidden")
        }
      >
        <div className="flex md:hidden my-12 flex-col gap-y-8">
          {menuItems.map((item) => (
            <Link
              className={
                "hover:opacity-100 opacity-80 active:bg-red " +
                (item.segment === segment ? "font-semibold opacity-100" : "")
              }
              onClick={toggle}
              key={item.href}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
