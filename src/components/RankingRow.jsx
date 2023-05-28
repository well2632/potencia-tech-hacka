import React from "react";
import Avatar from "./Avatar";

export default function RankingRow({ position }) {
  return (
    <div className="flex items-center justify-between text-white py-2 px-8 bg-[#161616] rounded-full gap-4">
      <div className="flex gap-4 items-center justify-center">
        <span className="text-3xl font-bold">{position}.</span>
        <Avatar id={1} name="Marcia" />
        <div className="flex flex-col">
          <span className="font-bold">Marta Soares</span>
          <span>Desenvolvedora Front-End</span>
        </div>
      </div>
      <span className="text-[#00FFFF] font-bold text-lg">8484 XP</span>
    </div>
  );
}
