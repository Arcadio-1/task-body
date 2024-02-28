import { cn } from "@/lib/utils";
import React from "react";

import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const ArrowLeft = ({ className }: Props) => {
  return (
    <svg
      className={cn("h-3 w-3 cursor-pointer fill-lime-600", className)}
      viewBox="0 0 32 32"
    >
      <g id="arrow_x5F_left">
        <polygon points="22,2.001 8,16 22,30  " />
      </g>
    </svg>
  );
};

export default ArrowLeft;
