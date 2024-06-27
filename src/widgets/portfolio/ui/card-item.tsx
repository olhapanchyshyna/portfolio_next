"use client";
import { CustomButton } from "@/features/custom-button";
import { Card } from "@/shared/ui/card";
import { useState } from "react";
import { TPortfolio } from "../model/initial";

type CardItemProps = {
  portfolio: TPortfolio;
};

export const CardItem = ({ portfolio }: CardItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`m-auto h-[320px] w-[300px] rounded-[40px] md:mx-[5px] md:my-[10px] md:w-[300px] ${portfolio.img} bg-cover bg-center bg-no-repeat cursor-pointer` }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className={`portfolio__hideText  ${isHovered ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}`}
        >
          <div className="mb-[20px] text-[25px] font-bold leading-[21px]">
            {portfolio.title}
          </div>
          <div className="mb-[30px] text-center text-[14px] font-medium leading-[20px]">
            {portfolio.descr}
          </div>
          <CustomButton text="View project" href={portfolio.link} targetBlank={true}/>
        </div>
      )}{" "}
    </Card>
  );
};
