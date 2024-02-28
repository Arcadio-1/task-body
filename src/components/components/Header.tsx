import React from "react";
import ArrowLeft from "../ui/icons/ArrowLeft";
import MenuIcon from "../ui/icons/MenuIcon";

export const Header: React.FC = () => {
  return (
    <div className="w-full">
      <MenuIcon className="ml-auto" />
      <div className="ml-auto flex flex-col gap-4">
        <div className="flex flex-col justify-start ml-auto">
          <div className="flex items-center ml-auto">
            <span className="font-bold text-slate-200">درصد چربی بدن</span>
            <ArrowLeft />
          </div>
          <span className="capitalize ml-auto font-thin text-xs">
            body fat percentage
          </span>
        </div>
        <div className="ml-auto text-slate-300">
          <h2 className="text-right">
            .نزدیک ترین تصویر را به بدن خود انتخاب کنید
          </h2>
        </div>
      </div>
    </div>
  );
};
