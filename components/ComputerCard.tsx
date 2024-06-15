"use client";

import { Computer } from "@/app/types";

export default function ToolCard({ computer }: { computer: Computer }) {
  return (
    <div className="flex flex-col p-4 text-pretty text-ellipsis border bg-white bg-opacity-5 text-white text-opacity-80 hover:text-opacity-100 border-white border-opacity-10">
      <div className="flex flex-row">
        <h5 className="font-semibold">{computer.name}</h5>
        {computer.image && (
          <a href={computer.image} className="mx-2" target="_blank">
            <svg
              className="w-6 h-6 text-white opacity-80 hover:opacity-100 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
      </div>
      <p>{computer.description}</p>
    </div>
  );
}