import { cn } from "@/lib/utils";
import { Button } from "@mui/material";
import React from "react";

interface Props {
  selected: null | number;
}
export const MainButton: React.FC<Props> = ({ selected }) => {
  return (
    <button
      onClick={() => console.log(`your lavel is ${selected}`)}
      className={cn("rounded-lg  w-full text-slate-300 ", {
        "bg-lime-600": selected !== null,
        "bg-transparent border-2 border-lime-600": selected === null,
      })}
      disabled={selected === null ? true : false}
    >
      تایید و ادامه
    </button>
  );
};
