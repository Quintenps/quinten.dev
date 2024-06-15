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
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            height={24}
            width={24}
            viewBox="0 0 24 24"
            className="fill-gray-200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2 4v16.002c0 .385.22.735.567.902.346.166.758.119 1.058-.121l4.725-3.781h12.65c.552 0 1-.448 1-1v-12.002c0-.552-.448-1-1-1h-18c-.552 0-1 .448-1 1zm18.5 11.502h-12.677l-4.323 3.46v-14.462h17zm-8.502-6.5c.414 0 .75.336.75.75v3.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75zm.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
              fill-rule="nonzero"
            />
          </svg>
          </a>
        )}
      </div>
      <p>{computer.description}</p>
    </div>
  );
}