import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import CheackIcon from "../ui/icons/CheackIcon";

interface Props {
  level: number;
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

const ImageSlider: React.FC<Props> = ({
  level,
  selected,
  setSelected,
  setLevel,
}) => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }
    api.scrollTo(level - 1);
  }, [level, api]);

  useEffect(() => {
    if (!api) {
      return;
    }
    setLevel(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setLevel(api.selectedScrollSnap() + 1);
    });
  }, [api, setLevel]);

  return (
    <Carousel setApi={setApi} className="w-full max-w-[15rem]">
      <CarouselContent defaultValue={3}>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-transparent border-transparent">
                <CardContent className="flex flex-col items-center gap-4">
                  <Image
                    src={`/assets/images/women-${index + 1}.png`}
                    alt={"any"}
                    width={250}
                    height={200}
                  />
                  <button
                    onClick={() => {
                      if (selected == index) {
                        setSelected(null);
                      } else {
                        setSelected(index);
                      }
                    }}
                  >
                    <CheackIcon isCheacked={selected === index} />
                  </button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-transparent border-transparent" />
      <CarouselNext className="bg-transparent border-transparent" />
    </Carousel>
  );
};

export default ImageSlider;
