"use client";
import React, { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { MainSlider } from "./components/MainSlider";
import { Dots } from "./components/Dots";
import { MainButton } from "./components/MainButton";
import ImageSlider from "./components/ImageSlider";
import { useTesting } from "./zustandTodo/state";

export const MainCard: React.FC = () => {
  const [level, setLevel] = useState<number>(1);
  const [selected, setSelected] = useState<number | null>(null);
  const test = 10;
  const bbbbbbbbbbbb = 12;

  // const test = useTesting((state) => state.test);
  // const setTest = useTesting((state) => state.changeTest);

  // useEffect(() => {
  //   setTest("w");
  // }, [setTest]);
  // console.log(test);

  return (
    <div className="grid place-items-center h-dvh mx-2 py-[4rem]">
      <div className="bg-gray-700 rounded-lg p-3 w-full max-w-lg flex flex-col items-center justify-center gap-5">
        <Header />
        <ImageSlider
          setLevel={setLevel}
          level={level}
          selected={selected}
          setSelected={setSelected}
        />
        <MainSlider level={level} setLevel={setLevel} />
        <Dots level={level} />
        <MainButton selected={selected} />
      </div>
    </div>
  );
};
