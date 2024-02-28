import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  level: number;
}

export const Dots: React.FC<Props> = ({ level }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className={cn(`p-1 bg-lime-600 rounded-full`, {
            "px-4": index + 1 === level,
          })}
        ></div>
      ))}
    </div>
  );
};
