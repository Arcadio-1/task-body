import { cn } from "@/lib/utils";
import { Slider } from "@mui/material";
import React from "react";

interface Props {
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

export const MainSlider: React.FC<Props> = ({ level, setLevel }) => {
  const marks = [
    {
      value: 1,
      label: "0%",
    },
    {
      value: 2,
      label: "8%",
    },
    {
      value: 3,
      label: "15%",
    },
    {
      value: 4,
      label: "20%",
    },
    {
      value: 5,
      label: "25%",
    },
    {
      value: 6,
      label: "30%",
    },
  ];
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setLevel(newValue);
    }
  };

  function valuetext(value: number) {
    return `${value}%`;
  }
  return (
    <Slider
      sx={{ "& .MuiSlider-markLabel": { color: "lime", opacity: "50%" } }}
      className={cn("w-[80%] , text-white")}
      size="small"
      value={level}
      max={6}
      step={1}
      min={1}
      getAriaValueText={valuetext}
      valueLabelDisplay="auto"
      aria-label="Custom marks"
      marks={marks}
      onChange={handleChange}
    />
  );
};
