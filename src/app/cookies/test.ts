"use server";

import { cookies } from "next/headers";

export const loger = (e: FormData) => {
  cookies().set("name", "test");
  console.log(e.get("name"));
};
