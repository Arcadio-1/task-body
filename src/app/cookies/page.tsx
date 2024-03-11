"use server";
import React from "react";
import { loger } from "./test";
import { CookeisPlayGround } from "./-components/CookeisPlayGround";

const page = () => {
  const test = 18;
  const newTest = "new one";
  return (
    <div>
      <CookeisPlayGround />
      <form action={loger}>
        <input type="text" name="name" />
        <button className="text-lime-600" type="submit">
          adder button
        </button>
      </form>
    </div>
  );
};

export default page;
