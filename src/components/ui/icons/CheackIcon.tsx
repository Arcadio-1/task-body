import { cn } from "@/lib/utils";
import React from "react";

import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  isCheacked: boolean;
};

const CheackIcon = ({ className, isCheacked }: Props) => {
  return (
    <svg
      className={cn("h-8 w-8 cursor-pointer fill-lime-600", className)}
      viewBox="0 0 512 512"
    >
      {isCheacked ? (
        <path d="M335 175L224 286.1L176.1 239c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l64 64C211.7 341.7 217.8 344 224 344s12.28-2.344 16.97-7.031l128-128c9.375-9.375 9.375-24.56 0-33.94S344.4 165.7 335 175zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z" />
      ) : (
        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z" />
      )}
    </svg>
  );
};

export default CheackIcon;
