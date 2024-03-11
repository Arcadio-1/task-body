"use client";
// import { cookies } from "next/headers";
import React from "react";

export const CookeisPlayGround = () => {
  return (
    <div>
      <button
        className="text-white"
        onClick={() => {
          console.log(document.cookie);
        }}
      >
        test
      </button>
    </div>
  );
};
